# Google Stitch MCP — Referência

Resumo dos argumentos e enums das ferramentas do servidor `user-stitch`. Para schemas completos, consulte `mcps/user-stitch/tools/*.json`.

## list_projects

- **filter** (opcional): `view=owned` | `view=shared`

## create_project

- **title** (opcional): string

## get_project

- **name** (obrigatório): `projects/{projectId}`

## list_screens

- **projectId** (obrigatório): ID numérico do projeto, sem prefixo

## get_screen

- **name** (obrigatório): `projects/{projectId}/screens/{screenId}`
- **projectId**, **screenId** (deprecated): ainda aceitos

## generate_screen_from_text

- **projectId** (obrigatório): ID do projeto
- **prompt** (obrigatório): texto do prompt
- **deviceType** (opcional): `MOBILE` | `DESKTOP` | `TABLET` | `AGNOSTIC` | `DEVICE_TYPE_UNSPECIFIED`
- **modelId** (opcional): `GEMINI_3_PRO` | `GEMINI_3_FLASH` | `MODEL_ID_UNSPECIFIED`

## edit_screens

- **projectId** (obrigatório): ID do projeto
- **selectedScreenIds** (obrigatório): array de strings (IDs das telas sem prefixo `screens/`)
- **prompt** (obrigatório): texto da edição
- **deviceType** (opcional): mesmo enum de deviceType acima
- **modelId** (opcional): mesmo enum de modelId acima

## generate_variants

- **projectId** (obrigatório): ID do projeto
- **selectedScreenIds** (obrigatório): array de IDs de telas
- **prompt** (obrigatório): texto para orientar as variantes
- **variantOptions** (obrigatório): objeto com:
  - **variantCount** (opcional): 1–5, default 3
  - **creativeRange** (opcional): `REFINE` | `EXPLORE` | `REIMAGINE` (default EXPLORE)
  - **aspects** (opcional): array de `LAYOUT` | `COLOR_SCHEME` | `IMAGES` | `TEXT_FONT` | `TEXT_CONTENT`
- **deviceType** (opcional): mesmo enum de deviceType
- **modelId** (opcional): mesmo enum de modelId

## Enums úteis (DesignTheme, quando aplicável)

- **colorMode**: `LIGHT` | `DARK` | `COLOR_MODE_UNSPECIFIED`
- **font**: entre outros `INTER`, `GEIST`, `DM_SANS`, `PLUS_JAKARTA_SANS`, `SPACE_GROTESK`, `WORK_SANS`, `SORA`, etc.
- **roundness**: `ROUND_FOUR` | `ROUND_EIGHT` | `ROUND_TWELVE` | `ROUND_FULL`

## Resposta de generate_screen_from_text / edit_screens / generate_variants

- **outputComponents**: array; cada item pode ter `text`, `suggestion` ou `design` (com `screens`).
- **sessionId**, **projectId**: para rastreamento.
- Se houver `suggestion`, exibir ao usuário e, se aceito, chamar novamente com esse texto em `prompt`.
