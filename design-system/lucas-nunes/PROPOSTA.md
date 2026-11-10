# PROPOSTA — adições ao design system "Lucas Nunes"

> Estado: **PROPOSTA**. Nada daqui entra no código antes de entrar no design system oficial
> (https://claude.ai/artifact/N9uyZ7ELgMcMLN2qC2nWa5). Escrito em 10 nov 2026.

A identidade pede uma experiência que hoje o sistema descreve em palavras (rio, rede acesa, constelações),
mas sem tokens nem componentes para a construir. Estas são as peças que faltam, por ordem de impacto.

## 1. Tokens de movimento para a viagem

O sistema só tem `duration-quick` (160ms), `duration-calm` (700ms) e `duration-breath` (11s).
Uma transição cinematográfica entre paradas precisa de mais tempo do que `duration-calm`, mas não pode ser um loop.

| Token | Valor proposto | Uso |
|---|---|---|
| `duration-journey` | 1200ms | Viagem de uma parada do mapa para a seguinte (câmara desliza ao longo do rio). Uma vez por clique. |
| `easing-journey` | `cubic-bezier(0.65, 0, 0.35, 1)` | Arranque e chegada suaves, como um barco a atracar. Só na viagem. |
| `draw-distance` | 100% | Comprimento de traço para "desenhar" o rio e as linhas da rede ao aparecer. |

Com `prefers-reduced-motion`: corte direto para a parada, sem viagem e sem desenho de traço.

## 2. Componente `RioMapa` (navegação como viagem)

- **O que é:** o rio (`agua`, à noite `luz` + `glow-rio`) como linha contínua que atravessa a página; cada projeto é uma **parada** (círculo de 6px, borda `accent-dark`, já descrito no README).
- **Interação:** tocar numa parada leva até ela com `duration-journey`; a parada ativa usa `accent` (o sol). Teclado: setas movem entre paradas; Enter abre o caso.
- **Em telemóvel:** o rio fica vertical, à esquerda; as paradas alinham com os títulos dos casos.
- **Acessibilidade:** `nav` com `aria-label="Mapa do trabalho"`, cada parada é um link com o nome do caso; o desenho do rio é decoração (`aria-hidden`).
- **Não fazer:** paradas sem nome, mais de uma parada ativa, rio que se mexe sozinho.

## 3. Componente `Constelacao` (estrelas do sigilo)

- Uma constelação por projeto, no vocabulário de pontos do sigilo LN: nós `accent` (dia) ou `sinal` (noite), traço `mata` / `luz`.
- Usada como capa pequena de cada caso no mapa e como marca de secção.
- Ao aparecer: as linhas desenham-se com `draw-distance` e `duration-calm`, uma vez.

## 4. Cenário `RedeAcesa` (noite com raízes, galhos e águas)

- Uma faixa noturna por página (regra já existente). Raízes, galhos e rio como **uma só linha** que liga neurónios, com luz própria (`luz` + `glow-rio`) e pontos `sinal` a correr.
- O único movimento contínuo é a respiração da luz em `duration-breath` (já permitido). Os pontos que correm param com `prefers-reduced-motion`.
- Asset: um SVG por tamanho (telemóvel e desktop), sem imagens raster.

## 5. Correção de documentação

- `button-text` sobre `accent`: o README e o `usage` do token dizem **7,6:1**; o valor medido é **6,54:1** (passa AA). Corrigir o número.

## O que pedir ao Lucas para aprovar

1. Os três tokens de movimento e os seus valores.
2. `RioMapa` como navegação principal da home (substitui a lista de casos no desktop; no telemóvel fica por cima da lista).
3. Se a `RedeAcesa` entra só no "Sobre" ou também no topo da home à noite.
