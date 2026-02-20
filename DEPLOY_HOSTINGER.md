# Deploy do App na VPS Hostinger

## 0. Deploy direto: só token (API) ou SSH/SCP

O ambiente usa o arquivo **`.env.deploy`** (não versionado).

### Opção A – Deploy apenas com token (API Hostinger)

A [documentação da API Hostinger](https://developers.hostinger.com/) permite deploy **só com token**: a API recebe a URL de um repositório GitHub; a VPS clona o repo e executa `docker-compose` (não há upload de arquivos pela API).

1. **Token:** Em [hpanel.hostinger.com → Perfil → API](https://hpanel.hostinger.com/profile/api) gere/copie o token. Em `.env.deploy`:
   ```text
   DEPLOY_TOKEN=seu_token_api
   VPS_VM_ID=1338576
   REPO_URL=https://github.com/SEU_USUARIO/SEU_REPO
   ```
2. **Repositório:** O projeto já tem `docker-compose.yml` e `Dockerfile` na raiz (build do frontend no container). Envie o código para um repositório **GitHub público** e use a URL em `REPO_URL`.
3. **Executar:**
   ```powershell
   .\scripts\deploy-to-vps.ps1 -UseApi
   ```
   Ou deixe `VPS_VM_ID` e `REPO_URL` preenchidos no `.env.deploy` e rode `.\scripts\deploy-to-vps.ps1` (o script usa a API quando esses campos estão definidos).

### Opção B – Deploy por SSH/SCP (senha ou chave)

1. **Token/senha:** Em `.env.deploy` coloque a **senha SSH** do usuário da VPS em `DEPLOY_TOKEN=` (não é o token da API).
2. **Destino:** `TARGET_HOST`, `TARGET_USER`, `TARGET_PATH` já podem estar preenchidos.
3. **Executar:**
   ```powershell
   .\scripts\deploy-to-vps.ps1
   ```
4. **Chave SSH:** Para não usar senha, defina `SSH_PRIVATE_KEY_PATH=` no `.env.deploy` e deixe `DEPLOY_TOKEN` em branco.
5. **Senha no Windows:** Se usar senha e não tiver PuTTY (`pscp`), o script pede a senha no terminal. Para automático, instale [PuTTY](https://www.putty.org/) ou use chave SSH.

---

## 1. Compilação (concluída)

O frontend já foi compilado. Artefatos em:

- `frontend/dist/` — use este diretório para publicar (index.html, assets/, manifest.json).

Para recompilar:

```bash
cd frontend
npm run build
```

---

## 2. Criar nova VPS (container) via MCP Hostinger

O MCP da Hostinger gerencia **máquinas virtuais (VPS)**, não containers Docker. Para ter uma nova VPS:

### 2.1 Listar VPS existentes

```json
{ "server": "hostinger-mcp", "toolName": "VPS_getVirtualMachinesV1", "arguments": {} }
```

- Se existir uma VPS em estado `initial`, use **2.3** (setup).
- Se quiser comprar uma nova, use **2.2**.

### 2.2 Comprar nova VPS

1. Obter `item_id` do catálogo (planos VPS):

   ```json
   { "server": "hostinger-mcp", "toolName": "billing_getCatalogItemListV1", "arguments": { "category": "VPS" } }
   ```

2. Comprar e configurar (substitua `ITEM_ID` e ajuste `setup` conforme a API):

   ```json
   {
     "server": "hostinger-mcp",
     "toolName": "VPS_purchaseNewVirtualMachineV1",
     "arguments": {
       "item_id": "ITEM_ID",
       "setup": "{\"template_id\": ID_TEMPLATE, \"data_center_id\": ID_DATACENTER}"
     }
   }
   ```

   Para obter `template_id` e opções de datacenter:

   - Templates: `VPS_getTemplatesV1` (argumentos vazios).
   - Detalhes do template: `VPS_getTemplateDetailsV1` com `templateId`.

   O parâmetro `setup` costuma ser um JSON string com os mesmos campos de `VPS_setupPurchasedVirtualMachineV1` (template_id, data_center_id, etc.).

### 2.3 Configurar VPS já comprada (estado `initial`)

Obter `template_id` e `data_center_id` (por exemplo via `VPS_getTemplatesV1` e lista de VPS/detalhes). Depois:

```json
{
  "server": "hostinger-mcp",
  "toolName": "VPS_setupPurchasedVirtualMachineV1",
  "arguments": {
    "virtualMachineId": ID_DA_VPS,
    "template_id": ID_TEMPLATE,
    "data_center_id": ID_DATACENTER,
    "hostname": "app-coocafe",
    "password": "SENHA_SEGURA",
    "enable_backups": true
  }
}
```

Após o setup, anote IP da VPS (nos detalhes da máquina) para o deploy.

### 2.4 Ligar a VPS (se estiver parada)

```json
{
  "server": "hostinger-mcp",
  "toolName": "VPS_startVirtualMachineV1",
  "arguments": { "virtualMachineId": ID_DA_VPS }
}
```

---

## 3. Subir o build na VPS

O MCP **não** envia arquivos para a VPS. É preciso usar SSH/SCP/rsync a partir da sua máquina.

### Opção A: Script PowerShell (Windows)

Use o script incluído (preencha host e usuário):

```powershell
.\scripts\deploy-to-vps.ps1 -TargetHost "IP_OU_HOST" -TargetUser "root"
```

### Opção B: Comandos manuais

1. Copiar `frontend/dist` para a VPS (ex.: diretório `/var/www/app`):

   **Windows (PowerShell com SCP):**
   ```powershell
   scp -r frontend/dist/* root@IP_DA_VPS:/var/www/app/
   ```

   **Linux/macOS:**
   ```bash
   rsync -avz --delete frontend/dist/ root@IP_DA_VPS:/var/www/app/
   ```

2. Na VPS, configurar um servidor web (Nginx/Apache) para servir `/var/www/app` (e apontar o document root para `index.html` do build).

### Opção C: Docker na VPS

Se na VPS você usar Docker, use o `Dockerfile` em `scripts/Dockerfile.frontend`. **Na raiz do projeto** (onde está a pasta `frontend/`):

```bash
docker build -f scripts/Dockerfile.frontend -t app-coocafe-frontend .
docker run -p 80:80 app-coocafe-frontend
```

Depois exporte a imagem ou faça o build direto na VPS (copiando o projeto e rodando os comandos acima).

---

## 4. Erro de certificado no MCP (`self-signed certificate in certificate chain`)

Esse erro **não é da VPS/Hostinger** — é do ambiente onde o MCP/cliente roda (Node/Python/CLI), que não confia na cadeia de certificados usada na conexão HTTPS.

### Correção (ordem recomendada)

1. **Atualize o bundle de CAs do sistema** (onde o MCP roda) e reinicie o processo:

   ```bash
   apt update
   apt install -y ca-certificates
   update-ca-certificates
   ```

2. **Se o MCP rodar em Node.js**, force o Node a usar o CA do sistema:

   ```bash
   export NODE_OPTIONS=--use-openssl-ca
   ```

   No Windows (PowerShell): `$env:NODE_OPTIONS="--use-openssl-ca"`

Depois disso, reinicie o processo do MCP e repita os passos de **2.1** a **2.4**.

---

## Resumo

| Etapa              | Ferramenta MCP                          | Local |
|--------------------|------------------------------------------|--------|
| Listar VPS         | `VPS_getVirtualMachinesV1`               | 2.1    |
| Catálogo VPS       | `billing_getCatalogItemListV1` (VPS)     | 2.2    |
| Comprar VPS        | `VPS_purchaseNewVirtualMachineV1`       | 2.2    |
| Templates OS       | `VPS_getTemplatesV1` / `getTemplateDetailsV1` | 2.2 / 2.3 |
| Configurar VPS     | `VPS_setupPurchasedVirtualMachineV1`    | 2.3    |
| Ligar VPS          | `VPS_startVirtualMachineV1`             | 2.4    |
| Enviar build       | SSH/SCP/rsync ou script                 | 3      |

Build atual: `frontend/dist/`.
