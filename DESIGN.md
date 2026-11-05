# Design — Portfólio de Lucas Nunes

## Fonte única de verdade

O design deste portfólio segue o design system **Lucas Nunes**:

**https://claude.ai/artifact/N9uyZ7ELgMcMLN2qC2nWa5**

Ideia central: **tudo está ligado**. Estratégia completa no doc *Plataforma de marca — Lucas Nunes*. Até novembro de 2026 o portfólio seguia o design system do NeuroMedit; o NeuroMedit continua com o seu.

Cópia dos ficheiros em [`design-system/`](design-system/) (`README.md`, `tokens.json`). A cópia pode ficar para trás: antes de mexer na interface, confirma no link acima.

## A regra

> **Nenhuma cor, fonte, raio, sombra ou duração nova fora dos tokens.**

- Usa `var(--token)` com o nome exato. Não escrevas o valor literal no CSS, nem como valor de reserva em `var(--x, …)`.
- Precisas de um valor que não existe? Propõe-o primeiro ao design system; só depois entra no código.
- **Movimento:** `--duration-quick` (hover, foco), `--duration-calm` (aparecer ao rolar, uma vez), `--easing-calm`, `--rise-distance`. O único loop é a respiração da luz à noite (`--duration-breath`, 11 s). Com `prefers-reduced-motion`, tudo vale 0.

## Como os tokens chegam às páginas

[`lucasnunes-ds.css`](lucasnunes-ds.css) define as variáveis e carrega as fontes (Fraunces e Manrope, Google Fonts). Cada página carrega-o antes do seu próprio `<style>`.

| Tema | Quando entra |
|---|---|
| `dia` | padrão |
| `noite` | quando o aparelho pede tema escuro, ou numa secção com `data-theme="noite"` (uma faixa noturna por página) |

Variáveis: `--bg`, `--bg-soft`, `--surface`, `--surface-strong`, `--text`, `--text-soft`, `--text-muted`, `--text-subtle`, `--button-text`, `--link-text`, `--line`, `--accent` (sol), `--accent-dark` (rio fundo), `--ceu`, `--agua`, `--folha`, `--mata`, `--sinal`, `--luz`, `--shadow-soft`, `--shadow-card`, `--glass-highlight`, `--glow-rio`, `--radius-lg|md|sm|chip|pill`, `--control-height`, `--button-pad-x`, `--container`, `--gutter`, `--font-sans`, `--font-serif`, `--duration-quick|calm|breath`, `--easing-calm`, `--rise-distance`.

## Regras de uso que mais contam

- **Uma ação óbvia por tela.** Botão principal em `accent` (sol) com `button-text`; o resto é secundário (borda `line`) ou link.
- **Texto:** `text` para títulos, `text-soft` para parágrafos, `accent-dark` para rótulos e ênfases. Nunca `accent` como cor de texto sobre `bg`.
- **Paisagem:** `ceu`, `agua`, `folha`, `mata` em fundos, faixas e ilustração, não em texto pequeno.
- **Títulos** (`h1`, `h2`) em Fraunces; interface em Manrope.
- **Símbolo:** sigilo LN (`assets/marca/sigilo.svg`, `sigilo-noite.svg`); favicon em `favicon.svg`.
- **Voz:** português do Brasil como língua canônica; frases curtas, convite em vez de ordem.

## Dívida conhecida

- Os estudos de caso ainda têm medidas fixas em pixels e estilos próprios herdados do sistema anterior; usam os tokens novos, mas não foram redesenhados.
- O estudo `tendencias-ux-2026.html` descreve paletas antigas na auditoria de contraste: é o registo do que foi feito.
