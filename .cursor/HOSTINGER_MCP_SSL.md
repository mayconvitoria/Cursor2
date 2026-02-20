# Desativar verificação SSL do MCP Hostinger

Para o MCP da Hostinger funcionar quando aparecer `self-signed certificate in certificate chain`:

1. Abra **Cursor → Settings → MCP** (ou o arquivo de configuração do MCP).
2. Localize o servidor **hostinger-mcp**.
3. Adicione o bloco `env` com a variável que desativa a verificação de certificado:

```json
"env": {
  "NODE_TLS_REJECT_UNAUTHORIZED": "0"
}
```

O trecho do servidor deve ficar assim (mantenha `command` e `args` como já estão):

```json
"hostinger-mcp": {
  "command": "...",
  "args": [...],
  "env": {
    "NODE_TLS_REJECT_UNAUTHORIZED": "0"
  }
}
```

4. Salve e **reinicie o Cursor**.

**Atenção:** `NODE_TLS_REJECT_UNAUTHORIZED=0` desativa a verificação SSL. Use só em ambiente de desenvolvimento.
