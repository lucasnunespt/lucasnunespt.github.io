# Lucas Nunes

Designer de Experiência do Usuário em Lisboa. A marca assenta numa só ideia: **tudo está ligado**. Corpo e mente, ciência e cuidado, design e IA, o rio da infância e a rede de neurônios. Tudo o que a marca mostra, diz e desenha sai dessa frase.

Fonte de estratégia: o doc *Plataforma de marca — Lucas Nunes*. Este sistema é a referência do portfólio `lucasnunespt.github.io`; o NeuroMedit tem o seu próprio sistema.

## Princípios

- **Tudo está ligado.** Nenhum elemento aparece solto: uma linha, um rio ou uma constelação liga-o ao resto.
- **Curiosidade antes de informação.** Cada parada mostra uma imagem e uma frase; o resto abre a quem quiser seguir.
- **Menos ruído, mais paisagem.** Fundos lisos, uma linha, muito espaço. A natureza entra pela cor, não por enfeites.
- **Ciência honesta, símbolos livres.** Os símbolos esotéricos são forma e metáfora, nunca promessa científica.
- **Uma ação óbvia por tela.** O sol (`accent`) só aparece onde se clica.

## O símbolo: sigilo LN

As letras L e N numa só linha contínua, com uma estrela em cada um dos seis vértices. Por trás, um círculo e o triângulo alquímico da água, apontado para baixo. É o nome feito constelação.

- **Versões:** `sigilo.svg` (dia: traço `mata`, nós `accent`), `sigilo-noite.svg` (traço `luz`), `favicon.svg` (só o LN e os nós, sobre `mata`, sem círculo nem triângulo).
- **Tamanho mínimo:** 48 px para o sigilo completo; abaixo disso, a versão favicon (lê-se a 16 px).
- **Área de proteção:** à volta do sigilo, o diâmetro de dois nós.
- **Não fazer:** rodar, separar as letras, mudar a cor dos nós, pôr sobre fotografia sem fundo liso.

## Cor

Dois temas, `dia` e `noite`. Os nomes dos tokens são os mesmos; só os valores mudam.

- **Paisagem:** `ceu`, `agua`, `folha` e `mata` vivem em fundos, faixas e ilustração.
- **Texto:** `text` para títulos, `text-soft` para parágrafos, `accent-dark` (rio fundo) para rótulos e ênfases. Todos passam 4,5:1 nos dois temas.
- **Sol:** `accent` só no botão principal e no item ativo, com `button-text` por cima.
- **Noite:** linhas com luz própria (`luz` com `glow-rio`), sinais em `sinal`. Uma faixa noturna por página, no máximo.

## Tipografia

Fraunces (Google Fonts) para títulos e citações: orgânica, como letra desenhada à mão. Manrope (Google Fonts) para a interface. Rótulos em maiúsculas com `letter-spacing` de 0,12em, cor `accent-dark`.

## Formas e elementos

- **O rio:** uma linha `agua` que liga as secções; cada projeto é uma parada (um círculo de 6 px com borda `accent-dark`).
- **A árvore-cérebro:** ilustração do "sobre"; galhos como rios, nós como neurônios.
- **A rede acesa:** cenário noturno, uma só rede de luz que volta à nascente.
- **Constelações:** uma por projeto, no mesmo vocabulário de pontos do sigilo.
- Botões sempre em pílula (`radius-pill`), altura mínima `control-height`.

## Movimento

`duration-quick` para hover e foco; `duration-calm` para aparecer ao rolar, uma vez; `easing-calm` em tudo. O único loop é a respiração da luz à noite, em `duration-breath` (11 s). Com `prefers-reduced-motion`, tudo fica no lugar e aceso.

## Voz

Português do Brasil como língua canônica; traduções em inglês, espanhol e italiano. Frases curtas, convite em vez de ordem, uma ideia por frase. Primeiro a cena ou o corpo, depois a ciência. "Vamos conversar?", não "Entre em contato através do formulário".
