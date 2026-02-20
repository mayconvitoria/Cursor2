---
name: google-stitch
description: Usa o Google Stitch via MCP para criar e gerenciar projetos de UI, gerar telas a partir de texto, editar telas e gerar variantes. Use quando o usuário pedir para criar designs de interface, gerar telas por prompt, editar telas no Stitch, listar projetos/telas ou trabalhar com o Stitch (text-to-UI, design, Figma).
---

# Google Stitch via MCP

Integração com o **Google Stitch** (ferramenta de design text-to-UI) através do servidor MCP `user-stitch`. Permite criar projetos, gerar telas a partir de prompts, editar telas existentes e gerar variantes de design.

## Servidor MCP

- **Identificador**: `user-stitch`
- **Uso**: Sempre invocar as ferramentas com `call_mcp_tool`, passando `server: "user-stitch"` e o `toolName` com os `arguments` no formato JSON esperado.

## Fluxo recomendado

1. **Listar ou criar projeto** → `list_projects` (ou `create_project` se for novo).
2. **Gerar telas** → `generate_screen_from_text` com `projectId` e `prompt`.
3. **Ver telas** → `list_screens` com `projectId`; para detalhes (HTML/screenshot) use `get_screen` com `name`: `projects/{projectId}/screens/{screenId}`.
4. **Editar telas** → `edit_screens` com `projectId`, `selectedScreenIds` (array de IDs sem prefixo `screens/`) e `prompt`.
5. **Variantes** → `generate_variants` com `projectId`, `selectedScreenIds`, `prompt` e `variantOptions` (obrigatório).

## Ferramentas disponíveis

| Ferramenta | Descrição | Parâmetros obrigatórios |
|------------|-----------|-------------------------|
| `list_projects` | Lista projetos do usuário | — (opcional: `filter`, ex. `view=owned` ou `view=shared`) |
| `create_project` | Cria novo projeto | — (opcional: `title`) |
| `get_project` | Detalhes de um projeto | `name` (ex: `projects/4044680601076201931`) |
| `list_screens` | Lista telas de um projeto | `projectId` (ID numérico sem `projects/`) |
| `get_screen` | Detalhes de uma tela (HTML, screenshot) | `name` (ex: `projects/{projectId}/screens/{screenId}`); API também aceita `projectId` + `screenId` (deprecated) |
| `generate_screen_from_text` | Gera tela a partir de prompt | `projectId`, `prompt` (opcional: `deviceType`, `modelId`) |
| `edit_screens` | Edita telas com prompt | `projectId`, `selectedScreenIds` (array de IDs), `prompt` |
| `generate_variants` | Gera variantes de telas | `projectId`, `selectedScreenIds`, `prompt`, `variantOptions` |

## Regras ao chamar o MCP

1. **Sempre consultar o schema** da ferramenta em `mcps/user-stitch/tools/<nome>.json` antes de montar os argumentos, para garantir tipos e campos obrigatórios.
2. **IDs**: `projectId` e `screenId` são passados **sem** os prefixos `projects/` e `screens/`, exceto no parâmetro `name` de `get_project` e `get_screen`, onde o formato é `projects/{id}` ou `projects/{projectId}/screens/{screenId}`.
3. **generate_screen_from_text e edit_screens**: podem levar alguns minutos; não repetir a chamada em caso de timeout. Se falhar por conexão, tentar depois recuperar a tela com `get_screen` ou `list_screens`.
4. **generate_screen_from_text**: se a resposta trouxer `output_components` com `suggestion` (ex.: "Yes, make them all"), mostrar as sugestões ao usuário; se ele aceitar, chamar novamente com `prompt` igual à sugestão aceita.
5. **generate_variants**: `variantOptions` é obrigatório. Exemplo mínimo:
   ```json
   {
     "variantCount": 3,
     "creativeRange": "EXPLORE",
     "aspects": ["LAYOUT", "COLOR_SCHEME"]
   }
   ```
   `creativeRange`: `REFINE` | `EXPLORE` | `REIMAGINE`. `variantCount`: 1–5. `aspects` (opcional): `LAYOUT`, `COLOR_SCHEME`, `IMAGES`, `TEXT_FONT`, `TEXT_CONTENT`.

## Exemplo de chamada (generate_screen_from_text)

```json
{
  "server": "user-stitch",
  "toolName": "generate_screen_from_text",
  "arguments": {
    "projectId": "4044680601076201931",
    "prompt": "Tela de login mobile com email e senha, estilo minimalista",
    "deviceType": "MOBILE"
  }
}
```

## Exemplo (get_screen)

Usar o `name` completo da tela (obtido em `list_screens` em cada item `screen.name`):

```json
{
  "server": "user-stitch",
  "toolName": "get_screen",
  "arguments": {
    "name": "projects/4044680601076201931/screens/98b50e2ddc9943efb387052637738f61"
  }
}
```

## Recursos adicionais

- Referência detalhada dos parâmetros e enums: [reference.md](reference.md)
