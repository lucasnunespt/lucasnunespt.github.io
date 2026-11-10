# MASTER.md — Portfólio de Lucas Nunes

> **Hierarquia:** o design system oficial "Lucas Nunes" (https://claude.ai/artifact/N9uyZ7ELgMcMLN2qC2nWa5) manda sempre.
> Este ficheiro traduz esse sistema e a identidade de marca em regras de trabalho para a skill ui-ux-pro-max.
> Se uma página tiver `design-system/lucas-nunes/pages/<pagina>.md`, as regras dela somam-se a estas, sem contrariar os tokens.
> Valores concretos vivem só em `lucasnunes-ds.css` e `design-system/tokens.json`. Aqui só aparecem nomes de tokens.

**Projeto:** Lucas Nunes · `lucasnunespt.github.io`
**Stack:** HTML e CSS estáticos, sem build; GitHub Pages a partir de `main`; i18n via `data-i18n` em `i18n-portfolio.js`.
**Reescrito:** 2026-11-08, a partir da saída genérica da skill (Swiss, azul e laranja), que foi descartada.

---

## Identidade

- **Posicionamento:** Designer de Experiência do Usuário que dirige IA.
- **Frase central:** Tudo está ligado.
- **Símbolo:** sigilo LN, as letras L e N numa linha contínua, com uma estrela em cada vértice. `assets/marca/sigilo.svg` (dia) e `sigilo-noite.svg` (noite). Mínimo 48 px; abaixo disso, `favicon.svg`.
- **Imagem:** natureza com pouco ruído. Verde de árvores, azul de água e céu, planetas. O rio é o símbolo central.
- **Cenário noturno:** raízes, galhos e águas com luz própria, ligando neurônios numa só linha (a "rede acesa").
- **Experiência:** interativa, desperta curiosidade em quem recruta. Navegação como viagem por um mapa de pontos (paradas no rio).
- **Línguas:** português do Brasil (canónica), espanhol, inglês e italiano. Nenhum texto visível fora do `i18n-portfolio.js`.

## Cor (só tokens)

| Papel | Token | Regra |
|---|---|---|
| Fundo | `--bg` → `--bg-soft` | Gradiente vertical. Areia de dia, mata escura à noite. |
| Superfícies | `--surface`, `--surface-strong` | Cartões, chips, cabeçalho, barra inferior. |
| Títulos | `--text` | Fraunces nos `h1`/`h2`. |
| Parágrafos | `--text-soft` | Passa 4,5:1 nos dois temas. |
| Metadados | `--text-muted` | Passa 4,5:1 sobre `--bg`. |
| Decoração | `--text-subtle` | Nunca para informação. |
| Ação principal (o sol) | `--accent` + `--button-text` | **Botões dourados.** Só no botão principal e no item ativo. Nunca como cor de texto sobre `--bg` claro (1,97:1). |
| Rótulos, ênfases, foco | `--accent-dark` | Rio fundo. 5,04:1 sobre `--bg` de dia. É a cor do anel de foco. |
| Links | `--link-text` | Sublinhado ou borda `--accent` no hover. |
| Paisagem | `--ceu`, `--agua`, `--folha`, `--mata` | Fundos, faixas, ilustração. Nunca texto pequeno. |
| Rede acesa | `--luz` (núcleo), `--agua` (halo), `--sinal` (pontos), `--glow-rio` | Só no tema `noite`. |
| Bordas | `--line` | Cartões e botões secundários. |

Temas: `dia` (padrão) e `noite` (preferência do sistema ou `data-theme="noite"`, uma faixa por página).

## Tipografia

- Títulos e citações: `--font-serif` (Fraunces), peso 400.
- Interface e texto: `--font-sans` (Manrope).
- Rótulos: maiúsculas, `letter-spacing` 0,12em, cor `--accent-dark`.
- Texto corrido até 60ch.

## Forma

- Raios: `--radius-lg|md|sm|chip|pill`. Botões sempre em pílula, altura mínima `--control-height`.
- Sombras: `--shadow-soft` (botão principal), `--shadow-card` (cartões), `--glass-highlight` somado por cima.
- Espaço: `--container`, `--gutter`. Muito espaço vazio; nada de enfeites.

## Componentes

- **Button primary:** fundo `--accent`, texto `--button-text`, `--shadow-soft`; hover sobe para `--shadow-card`. Um por ecrã.
- **Button secondary:** borda `--line`, texto `--text`; hover com `--surface-strong` e borda `--accent`.
- **Link:** `--link-text`, alvo mínimo de 44 px.
- **Contacto sempre visível:** botão principal "Falar comigo" no cabeçalho (desktop) e na barra inferior (≤ 760 px).
- **Seletor de idioma:** 4 línguas; foco visível em cada opção.
- **O rio e as paradas:** uma linha `--agua` liga as secções; cada projeto é uma parada (círculo de 6 px, borda `--accent-dark`).

## Movimento

- `--duration-quick` (hover, foco), `--duration-calm` (aparecer ao rolar, uma vez), curva `--easing-calm`, subida `--rise-distance`.
- Único loop: a respiração da luz à noite, `--duration-breath`.
- Com `prefers-reduced-motion`, tudo parado e aceso.
- Transições cinematográficas entre paradas: **ainda não existem tokens**. Ver a proposta em `design-system/lucas-nunes/PROPOSTA.md`.

## O que se aproveita da skill ui-ux-pro-max

Use `search.py` para consulta de UX, acessibilidade e padrões, nunca para paleta ou fontes:

```
python .claude/skills/ui-ux-pro-max/scripts/search.py "<tema>" --domain ux
```

## Proibido

- Cores, fontes, raios, sombras ou durações fora dos tokens, incluindo valores de reserva em `var()`.
- Emojis como ícones (usar SVG em linha com `aria-hidden="true"`).
- Mais de uma ação principal por ecrã.
- `--accent` como texto ou anel de foco sobre fundo claro.
- `outline: none` sem um substituto visível.
- Loops de movimento além da respiração noturna.
- Texto visível sem `data-i18n` e tradução nas 4 línguas.

## Checklist antes de entregar

- [ ] Só `var(--token)`; nenhum valor literal novo.
- [ ] Contraste: texto ≥ 4,5:1, elementos de interface e foco ≥ 3:1, nos dois temas.
- [ ] Foco visível com `--accent-dark` em todos os controlos.
- [ ] Alvos de toque ≥ 44 px.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Imagens com `width`, `height` e `alt` traduzido.
- [ ] Novas chaves `data-i18n` presentes em pt, en, es e it.
- [ ] Testado a 375, 768, 1024 e 1440 px, sem scroll horizontal.
- [ ] Nenhum conteúdo escondido atrás do cabeçalho ou da barra inferior.
- [ ] Diff mostrado antes de qualquer commit; sem push sem pedido.
