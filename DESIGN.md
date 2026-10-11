# Design — Portfólio de Lucas Nunes

## Fonte única de verdade

O design deste portfólio segue o design system do NeuroMedit:

**https://claude.ai/artifact/JHzwjfKnJ11kwCCJkcxvrQ**

Cores, tipografia, espaçamento, raios, sombras e voz vêm dele. Se o CSS deste repositório e o design system discordarem, o design system ganha e o código é corrigido.

Neste repositório há uma cópia dos ficheiros que contam, em [`design-system/`](design-system/):

- [`design-system/README.md`](design-system/README.md): o livro da marca, com os princípios.
- [`design-system/tokens.json`](design-system/tokens.json): os valores (cores por tema, famílias e estilos de texto, espaçamento, raios, sombras).

A cópia pode ficar para trás. Antes de mexer na interface, confirma a versão no link acima.

## A regra

> **Nenhuma cor, fonte, raio, sombra ou duração nova fora dos tokens.**

- Usa `var(--token)` com o nome exato (`--bg`, `--text-soft`, `--accent`, `--radius-pill`, `--shadow-card`…). Não escrevas o valor literal no CSS, nem como valor de reserva em `var(--x, …)`.
- O design system ainda **não tem tokens de movimento**. Por isso este portfólio não tem animações nem transições. Qualquer duração precisa de ser proposta primeiro ao design system.
- Precisas de um valor que não existe? Propõe-o **primeiro** ao design system (nome, valor em cada tema, nota de uso). Só depois de entrar nos tokens é que vai para o código.
- O que o design system marca como "Decidido, ainda por implementar" ou "PROPOSTA" é direção, não código atual.

## Como os tokens chegam às páginas

[`neuromedit-ds.css`](neuromedit-ds.css) define as variáveis, e cada página carrega-o antes do seu próprio `<style>`.

| Tema | Quando entra |
|---|---|
| `calm` (claro) | padrão |
| `night` (escuro) | quando o aparelho pede tema escuro (`prefers-color-scheme: dark`) |

Os outros temas do design system (`dawn`, `day`, `evening`, `late-night`, `luz`) não estão no portfólio. Só entram se o design system os pedir aqui.

Variáveis disponíveis: `--bg`, `--bg-soft`, `--surface`, `--surface-strong`, `--text`, `--text-soft`, `--text-muted`, `--text-subtle`, `--button-text`, `--link-text`, `--line`, `--accent`, `--accent-dark`, `--shadow-soft`, `--shadow-card`, `--glass-highlight`, `--radius-lg|md|sm|chip|pill`, `--control-height`, `--button-pad-x`, `--container`, `--gutter`, `--font-sans`, `--font-serif`.

## Regras de uso que mais contam

- **Uma só ação óbvia por ecrã.** Um botão principal em `accent` com `button-text`; o resto é secundário (borda `line`, fundo transparente) ou link.
- **Texto:** `text` para títulos, `text-soft` para parágrafos. `text-muted` e `text-subtle` não passam 4,5:1 no tema claro: nunca em texto pequeno que precise de ser lido.
- **Texto em destaque sobre fundo claro:** usa `accent-dark`, não `accent`. O `accent` (sálvia) não tem contraste suficiente como cor de texto.
- **Fundo:** gradiente vertical de `bg` para `bg-soft`. Cartões de vidro: `surface`, borda `line`, sombra `shadow-card` com `glass-highlight`.
- **Botões:** sempre pílula (`radius-pill`), altura mínima `control-height`.
- **Voz:** português do Brasil como língua canónica. Frases curtas, convite em vez de ordem.

## Dívida conhecida

- As páginas ainda têm medidas fixas em pixels (larguras de controlos, tamanhos de ícones). O design system só cobre cor, tipo, raio, sombra e espaçamento, por isso não são violações, mas convém revê-las.
- A fonte serifada em itálico, usada nos destaques (`em`), é a do design system, mas lá só está prevista para a versão Luz. Convém perguntar se vale também aqui.
- O estudo `tendencias-ux-2026.html` descreve a paleta antiga (terracota `#8A4726`) na tabela da auditoria de contraste. É o registo do que foi feito, não o visual atual.
