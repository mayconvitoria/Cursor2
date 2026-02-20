---
name: hostinger-vps
description: Conecta e gerencia VPS da Hostinger via MCP. Lista VPS, inicia/para/reinicia máquinas, configura setup inicial, snapshots, backups, métricas, senhas, hostname e DNS. Use quando o usuário pedir para gerenciar VPS Hostinger, conectar à VPS, listar máquinas, ligar/desligar servidor, criar snapshot, ver backups ou métricas.
---

# VPS Hostinger via MCP

Integração com a **VPS da Hostinger** através do servidor MCP `hostinger-mcp`. Permite listar máquinas virtuais, obter detalhes, iniciar/parar/reiniciar, configurar setup inicial, gerenciar snapshots e backups, consultar métricas (CPU, memória, disco, rede) e alterar senhas/hostname/DNS.

## Servidor MCP

- **Identificador**: `user-hostinger-mcp` (nas chamadas MCP o Cursor expõe servidores do usuário com prefixo `user-`).
- **Uso**: Sempre invocar as ferramentas com `call_mcp_tool`, passando `server: "user-hostinger-mcp"`, `toolName` (nome exato da ferramenta) e `arguments` no formato JSON esperado.

## Regra obrigatória

**Sempre consultar o schema** da ferramenta em `mcps/hostinger-mcp/tools/<nome-da-ferramenta>.json` antes de chamar `call_mcp_tool`, para garantir parâmetros obrigatórios e tipos corretos.

## Fluxos comuns

1. **Listar VPS** → `VPS_getVirtualMachinesV1` (sem argumentos).
2. **Detalhes de uma VPS** → `VPS_getVirtualMachineDetailsV1` com `virtualMachineId` (integer).
3. **Ligar/Desligar/Reiniciar** → `VPS_startVirtualMachineV1`, `VPS_stopVirtualMachineV1` ou `VPS_restartVirtualMachineV1`, passando `virtualMachineId`.
4. **Configurar VPS recém-comprada** → `VPS_setupPurchasedVirtualMachineV1` com `virtualMachineId`, `template_id`, `data_center_id` (obrigatórios); opcionais: `password`, `hostname`, `enable_backups`, `public_key`, etc.
5. **Snapshot** → `VPS_createSnapshotV1`, `VPS_getSnapshotV1`, `VPS_restoreSnapshotV1`, `VPS_deleteSnapshotV1` (todos com `virtualMachineId`).
6. **Backups** → `VPS_getBackupsV1` com `virtualMachineId`; `VPS_restoreBackupV1` para restaurar.
7. **Métricas** → `VPS_getMetricsV1` com `virtualMachineId`, `date_from` e `date_to` (strings de data).
8. **Senha e hostname** → `VPS_setRootPasswordV1`, `VPS_setPanelPasswordV1`, `VPS_setHostnameV1`, `VPS_resetHostnameV1`.
9. **DNS/PTR** → `VPS_setNameserversV1`, `VPS_createPTRRecordV1`, `VPS_deletePTRRecordV1`.
10. **Recovery e Monarx** → `VPS_startRecoveryModeV1`, `VPS_stopRecoveryModeV1`; `VPS_installMonarxV1`, `VPS_uninstallMonarxV1`, `VPS_getScanMetricsV1`.
11. **Outros** → `VPS_getTemplatesV1`, `VPS_getActionsV1`, `VPS_getActionDetailsV1`, `VPS_getAttachedPublicKeysV1`, `VPS_purchaseNewVirtualMachineV1`, `VPS_recreateVirtualMachineV1`.

## Ferramentas principais (resumo)

| Ferramenta | Uso | Argumentos típicos |
|------------|-----|--------------------|
| `VPS_getVirtualMachinesV1` | Listar todas as VPS | — |
| `VPS_getVirtualMachineDetailsV1` | Detalhes de uma VPS | `virtualMachineId` |
| `VPS_startVirtualMachineV1` | Ligar VPS | `virtualMachineId` |
| `VPS_stopVirtualMachineV1` | Desligar VPS | `virtualMachineId` |
| `VPS_restartVirtualMachineV1` | Reiniciar VPS | `virtualMachineId` |
| `VPS_setupPurchasedVirtualMachineV1` | Configurar VPS nova | `virtualMachineId`, `template_id`, `data_center_id` (+ opcionais) |
| `VPS_getMetricsV1` | Métricas (CPU, memória, disco, rede) | `virtualMachineId`, `date_from`, `date_to` |
| `VPS_createSnapshotV1` | Criar snapshot | `virtualMachineId` |
| `VPS_getSnapshotV1` | Ver snapshot | `virtualMachineId` |
| `VPS_restoreSnapshotV1` | Restaurar snapshot | conferir schema |
| `VPS_getBackupsV1` | Listar backups | `virtualMachineId` (+ opcional `page`) |
| `VPS_restoreBackupV1` | Restaurar backup | conferir schema |
| `VPS_setRootPasswordV1` | Definir senha root | conferir schema |
| `VPS_setHostnameV1` | Definir hostname | conferir schema |

Para qualquer outra ferramenta (PTR, nameservers, recovery, Monarx, templates, actions, etc.), ler o JSON em `mcps/hostinger-mcp/tools/` antes de chamar.

## Exemplo de chamada

```json
{
  "server": "user-hostinger-mcp",
  "toolName": "VPS_getVirtualMachinesV1",
  "arguments": {}
}
```

Para detalhes de uma VPS (ex.: ID 12345):

```json
{
  "server": "user-hostinger-mcp",
  "toolName": "VPS_getVirtualMachineDetailsV1",
  "arguments": { "virtualMachineId": 12345 }
}
```

## Observações

- IDs de VPS são inteiros; obter primeiro com `VPS_getVirtualMachinesV1` ou `VPS_getVirtualMachineDetailsV1`.
- Criar novo snapshot **sobrescreve** o snapshot existente (conforme documentação da API).
- Datas em `VPS_getMetricsV1`: usar formato esperado pela API (ver schema; em geral ISO ou YYYY-MM-DD).

## Erro `self-signed certificate in certificate chain`

O erro vem do **ambiente onde o MCP roda** (não da Hostinger): o cliente HTTPS não confia na cadeia de certificados. Sugerir ao usuário:

1. Atualizar CAs do sistema e reiniciar o processo: `apt update && apt install -y ca-certificates && update-ca-certificates`
2. Se for Node.js: `export NODE_OPTIONS=--use-openssl-ca` (Windows: `$env:NODE_OPTIONS="--use-openssl-ca"`).
