# CLAUDE.md — Portfólio de Lucas Nunes

Instruções para o Claude (e qualquer agente) que trabalhe neste repositório.

## Interface: ler o design system antes de mexer

Qualquer alteração de interface (CSS, HTML com estilos, páginas novas, estados) começa por ler o design system oficial:

https://claude.ai/artifact/JHzwjfKnJ11kwCCJkcxvrQ

1. Lê `project/README.md` e `project/tokens.json` do artifact (ação `read`). Há uma cópia em `design-system/`, que pode estar desatualizada.
2. Usa **só os tokens dele**: nenhuma cor, fonte, raio, sombra ou duração nova fora dos tokens. No CSS, `var(--nome-do-token)`, nunca o valor literal, nem como valor de reserva de `var()`.
3. Não há tokens de movimento: sem animações nem transições.
4. Se faltar um valor ou componente, **não o inventes no código**: propõe-o primeiro como adição ao design system e espera que entre lá.
5. O que o design system marca como "Decidido, ainda por implementar" ou "PROPOSTA" é direção, não código atual.

Regras completas e dívida conhecida: [`DESIGN.md`](DESIGN.md).

## Outras notas

- Português do Brasil é a língua canónica do texto; as traduções vivem em `i18n-portfolio.js` via `data-i18n`.
- O que se publica aqui vai para o ar em `lucasnunespt.github.io`. Mostrar o diff antes de qualquer commit e não fazer push sem pedido.
