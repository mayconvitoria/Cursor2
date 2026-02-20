# Publicar a aplicação na VPS Hostinger

## 1. Ativar o MCP Hostinger no Cursor

O deploy “via MCP” usa o MCP da Hostinger para **obter o IP e o estado da VPS**. O envio do código é feito por **SSH/SCP** a partir da sua máquina.

1. Abra **Cursor → Settings → MCP** (ou o arquivo de configuração do MCP).
2. Adicione o servidor **hostinger-mcp** conforme a documentação do pacote (comando, args, variáveis de ambiente).
3. Se aparecer erro de certificado SSL, use o guia em [HOSTINGER_MCP_SSL.md](.cursor/HOSTINGER_MCP_SSL.md).
4. Reinicie o Cursor para carregar o MCP.

**Importante:** Nas configurações o servidor aparece como `hostinger-mcp`, mas nas chamadas MCP o Cursor usa o nome **`user-hostinger-mcp`**. O assistente deve usar esse nome ao invocar as ferramentas.

Depois de ativo, você pode pedir ao assistente: *“Liste minhas VPS na Hostinger”* ou *“Qual o IP da minha VPS?”*. O assistente usará `VPS_getVirtualMachinesV1` e `VPS_getVirtualMachineDetailsV1` para obter o IP.

## 2. Garantir que a VPS está ligada

Pelo painel Hostinger ou via MCP (quando ativo):

- **Ligar**: `VPS_startVirtualMachineV1` com o `virtualMachineId` da sua VPS.
- **Confirmar IP**: em detalhes da VPS deve aparecer o endereço IPv4 (ex.: `123.45.67.89`).

## 3. Build do frontend

No projeto, na raiz do repositório (ou em `frontend`):

```powershell
cd "c:\temp\MVP\Armazém\2-App\Cursor 2\frontend"
npm run build
```

Isso gera a pasta `frontend/dist`.

## 4. Deploy na VPS (PowerShell)

Use o script existente com o **IP ou hostname da VPS** (obtido no passo 1/2):

```powershell
cd "c:\temp\MVP\Armazém\2-App\Cursor 2"
.\scripts\deploy-to-vps.ps1 -TargetHost "IP_DA_SUA_VPS" -TargetUser "root" -TargetPath "/var/www/app"
```

Exemplo:

```powershell
.\scripts\deploy-to-vps.ps1 -TargetHost "123.45.67.89" -TargetUser "root" -TargetPath "/var/www/app"
```

- **TargetHost**: IP ou domínio da VPS (ex.: do MCP ou do painel Hostinger).
- **TargetUser**: usuário SSH (comum: `root`).
- **TargetPath**: pasta no servidor onde ficará o frontend (o script envia o conteúdo de `frontend/dist` para lá).

Certifique-se de que o SSH está configurado (chave ou senha) para `root@IP_DA_VPS`.

## 5. Servir o frontend na VPS

O script só **copia** os arquivos. Na VPS você precisa de um servidor web apontando para essa pasta.

### Opção A – Nginx (recomendado)

Na VPS (via SSH):

```bash
# Instalar Nginx (ex.: Debian/Ubuntu)
apt update && apt install -y nginx

# Criar site apontando para a pasta do deploy
# Ex.: /etc/nginx/sites-available/app
# server { listen 80; root /var/www/app; index index.html; location / { try_files $uri $uri/ /index.html; } }
ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### Opção B – Docker (usando o Dockerfile do projeto)

Na sua máquina, build e envio da imagem (ou build na VPS):

```powershell
# Build local do frontend
cd frontend && npm run build && cd ..

# Copiar dist para contexto (se o Dockerfile esperar em ./dist)
# O Dockerfile.frontend espera frontend/dist; buildar na raiz do projeto:
docker build -f scripts/Dockerfile.frontend -t app-coocafe-frontend .
# Na VPS: docker run -d -p 80:80 --name app app-coocafe-frontend
```

Depois, na VPS: importar a imagem ou fazer build lá e rodar o container na porta 80.

## Resumo do fluxo “via MCP”

| Etapa | Onde | Como |
|-------|------|------|
| 1. Ativar MCP | Cursor | Configurar servidor **hostinger-mcp** e reiniciar |
| 2. Obter IP / estado | Cursor (assistente) | Pedir para listar VPS ou detalhes da VPS (MCP) |
| 3. Ligar VPS (se necessário) | Cursor (assistente) ou Painel | MCP: `VPS_startVirtualMachineV1` |
| 4. Build | Sua máquina | `cd frontend && npm run build` |
| 5. Deploy | Sua máquina | `.\scripts\deploy-to-vps.ps1 -TargetHost "IP" ...` |
| 6. Servir | VPS (SSH) | Nginx ou Docker conforme acima |

Assim, a “publicação na VPS da Hostinger via MCP” usa o MCP para **gestão e descoberta da VPS**, e o script PowerShell + SSH para **publicar** o conteúdo do frontend na VPS.
