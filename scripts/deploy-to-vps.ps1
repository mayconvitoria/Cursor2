# Deploy do frontend para VPS Hostinger: via API (apenas token) ou via SSH/SCP
# Via API: defina em .env.deploy: HOSTINGER_API_TOKEN (ou DEPLOY_TOKEN), VPS_VM_ID, REPO_URL (GitHub)
# Via SCP: defina TARGET_HOST, DEPLOY_TOKEN (senha SSH) ou SSH_PRIVATE_KEY_PATH
param(
    [Parameter(Mandatory = $false)]
    [string]$TargetHost = "",
    [Parameter(Mandatory = $false)]
    [string]$TargetUser = "root",
    [Parameter(Mandatory = $false)]
    [string]$TargetPath = "/var/www/app",
    [Parameter(Mandatory = $false)]
    [string]$ProjectRoot = "",
    [Parameter(Mandatory = $false)]
    [switch]$UseApi
)

$ErrorActionPreference = "Stop"

# Raiz do projeto
if ($ProjectRoot) {
    $projectRoot = $ProjectRoot
} else {
    $projectRoot = Split-Path -Parent $PSScriptRoot
}

# Carregar .env.deploy (credenciais e destino)
$envDeployPath = Join-Path $projectRoot ".env.deploy"
if (Test-Path $envDeployPath) {
    Get-Content $envDeployPath | ForEach-Object {
        if ($_ -match '^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$' -and $_.Trim() -notmatch '^\#') {
            $name = $matches[1]
            $value = $matches[2].Trim().Trim('"').Trim("'")
            Set-Item -Path "Env:$name" -Value $value -Force
        }
    }
}

$apiToken = $env:HOSTINGER_API_TOKEN
if (-not $apiToken) { $apiToken = $env:DEPLOY_TOKEN }
$vpsVmId = $env:VPS_VM_ID
$repoUrl = $env:REPO_URL
if (-not $repoUrl) { $repoUrl = $env:GITHUB_REPO }

# --- Deploy via API (apenas token): Hostinger clona o repo e executa docker-compose ---
if ($UseApi -or ($apiToken -and $vpsVmId -and $repoUrl)) {
    $projectName = $env:PROJECT_NAME
    if (-not $projectName) { $projectName = "app-coocafe-frontend" }
    $uri = "https://developers.hostinger.com/api/vps/v1/virtual-machines/$vpsVmId/docker"
    $body = @{
        project_name = $projectName
        content      = $repoUrl
    } | ConvertTo-Json
    $headers = @{
        "Authorization" = "Bearer $apiToken"
        "Content-Type"   = "application/json"
    }
    Write-Host "Deploy via API Hostinger (apenas token): VM $vpsVmId, projeto $projectName" -ForegroundColor Cyan
    try {
        $response = Invoke-RestMethod -Uri $uri -Method Post -Headers $headers -Body $body -TimeoutSec 60
        Write-Host "Deploy iniciado com sucesso. A VPS vai clonar o repo e subir o container." -ForegroundColor Green
        exit 0
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        Write-Host "Falha no deploy via API (HTTP $statusCode): $($_.Exception.Message)" -ForegroundColor Red
        if ($statusCode -eq 401) { Write-Host "Dica: confira HOSTINGER_API_TOKEN em .env.deploy (token da API em hpanel.hostinger.com/profile/api)." -ForegroundColor Yellow }
        if ($statusCode -eq 404) { Write-Host "Dica: confira VPS_VM_ID (ex.: no painel VPS, URL contem o ID)." -ForegroundColor Yellow }
        exit 1
    }
}

# --- Deploy via SSH/SCP ---
if ([string]::IsNullOrWhiteSpace($TargetHost)) { $TargetHost = $env:TARGET_HOST }
if ([string]::IsNullOrWhiteSpace($TargetUser)) { $TargetUser = $env:TARGET_USER }
if ([string]::IsNullOrWhiteSpace($TargetPath)) { $TargetPath = $env:TARGET_PATH }
if ([string]::IsNullOrWhiteSpace($TargetHost)) {
    Write-Error "Informe -TargetHost ou defina TARGET_HOST em .env.deploy. Para deploy apenas com token, defina VPS_VM_ID e REPO_URL (GitHub) e use -UseApi."
    exit 1
}
if (-not $TargetUser) { $TargetUser = "root" }
if (-not $TargetPath) { $TargetPath = "/var/www/app" }

$deployToken = $env:DEPLOY_TOKEN
if (-not $deployToken) { $deployToken = $env:SSH_PASSWORD }
$sshKeyPath = $env:SSH_PRIVATE_KEY_PATH

$distPath = Join-Path (Join-Path $projectRoot "frontend") "dist"
if (-not (Test-Path $distPath)) {
    Write-Error "Pasta de build nao encontrada: $distPath. Execute 'npm run build' em frontend primeiro."
    exit 1
}

$dest = "${TargetUser}@${TargetHost}:$TargetPath"
Write-Host "Enviando $distPath para $dest"

# Opção 1: Chave privada SSH
if ($sshKeyPath -and (Test-Path $sshKeyPath)) {
    Push-Location $distPath
    try {
        scp -o StrictHostKeyChecking=accept-new -i $sshKeyPath -r . $dest
    } finally { Pop-Location }
}
# Opção 2: Token/senha via pscp (PuTTY) no Windows
elseif ($deployToken) {
    $pscp = Get-Command pscp -ErrorAction SilentlyContinue
    if (-not $pscp) {
        Write-Host "AVISO: pscp (PuTTY) nao encontrado. Para deploy com senha no Windows, instale PuTTY ou use chave SSH (SSH_PRIVATE_KEY_PATH em .env.deploy)." -ForegroundColor Yellow
        Write-Host "Tentando scp (vai pedir senha no terminal)..." -ForegroundColor Yellow
        Push-Location $distPath
        try {
            scp -o StrictHostKeyChecking=accept-new -r . $dest
        } finally { Pop-Location }
    } else {
        Push-Location $distPath
        try {
            & pscp -batch -pw $deployToken -r . "${TargetUser}@${TargetHost}:$TargetPath"
        } finally { Pop-Location }
    }
}
# Opção 3: Nenhuma credencial em .env.deploy – scp interativo (pede senha)
else {
    Write-Host "Nenhum DEPLOY_TOKEN nem SSH_PRIVATE_KEY_PATH em .env.deploy; o SCP vai pedir a senha no terminal." -ForegroundColor Yellow
    Push-Location $distPath
    try {
        scp -o StrictHostKeyChecking=accept-new -r . $dest
    } finally { Pop-Location }
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deploy concluido. Acesse via HTTP no servidor (Nginx/Docker em $TargetPath)." -ForegroundColor Green
} else {
    Write-Error "Falha no SCP. Verifique .env.deploy (DEPLOY_TOKEN ou SSH_PRIVATE_KEY_PATH), rede e acesso SSH."
    exit 1
}
