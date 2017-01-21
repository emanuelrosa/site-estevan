---
layout: post
title: "Não existe CSS3"
date: 2017-01-21 12:30:08
image: '/assets/img/nao-existe-css3.png'
description: "A maior confusão da história do CSS que criou um mito: a lenda do CSS3. Um ponto no tempo que nunca existiu e que confunde muita gente."
tags:
- css
twitter_text: "A maior confusão da história do CSS que criou um mito: a lenda do CSS3."
---

Existe sim (que cara louco), mas não como você imagina ou como te vendem.

Veja [essa página](https://www.w3.org/Style/CSS/current-work){:target="_blank"}, passe mal e volte aqui que eu te explico o que está acontecendo.

Viu? Tomou uma água? Entendeu aquelas tabelas cheias de cor e *level* pra tudo que é lado? O tio explica.

## Um pouco de história

Vamos voltar um pouco no tempo, até quando saiu a última grande versão do CSS, a versão 2.1, em 2011. Essa especificação levou 9 anos pra ficar pronta (de 2002 a 2011)! Isso porque o projeto era desenvolvido como uma única coisa, ou seja, se eu tivesse criado alguma coisa muito boa em 2003 e você só tivesse terminado a sua em 2011, todo o projeto, incluindo as minhas alterações de muuuito tempo antes, sairiam juntas.

Depois de ver que isso não seria uma boa ideia, o CSS Working Group (CSSWG) decidiu dividir o projeto em módulos. O que já estava na versão 2.1 e continuaria sendo desenvolvido, evoluiu pro level 3. Alguns exemplos são: selectors, backgrounds, borders, fonts, text decoration e por aí vai. O que foi sendo adicionado ao CSS depois disso, começou da versão 1, em que temos alguns exemplos bem conhecidos como: masking, flexbox, grid, blanding e [filters](https://css-tricks.com/almanac/properties/f/filter/){:target="_blank"}.

Ou seja, quem contrata alguém que saiba CSS3, não quer alguém que conheça flexbox, por exemplo, já que ele ainda está no level 1. Na teoria.

## Quem inventou o termo CSS3?

Claro que isso não é verdade, o que acontece é que o próprio grupo que desenvolve a linguagem (CSSWG) começou com essa história de CSS3 (igualzinho fez a ECMA International quando em 2015 lançou a versão 6 do ECMAScript (ES6) - o tal do JavaScript - e depois quis renomear pra ES2015).

{% include image.html src="../assets/img/css3-wg.png" alt="Versões do Flexbox desde o começo, em que até 2012 tudo era nomeado com css3 e depois passou a ser apenas css" caption="Mudei um negocinho aqui, ninguém vai reparar" %}

O nome pegou e, com a cagada feita, todo mundo foi obrigado a surfar a onda errada. Eu tenho uma [série de vídeos no YouTube](https://www.youtube.com/playlist?list=PLB7wuPF7rlckDdLVxueGuQIpI_3Nl2pCt){:target="_blank"} sobre HTML5 e **CSS3**, porque é o termo que as pessoas mais enxergam e mais buscam. Não fiz isso com meu livro [Aprenda HTML e CSS](http://aprendahtmlecss.com.br/){:target="_blank"}).

## O que aprender/usar?

Invista no que está sendo usado atualmente e que tem suporte aceitável (IE11+, 95%+ no [caniuse.com](http://caniuse.com/){:target="_blank"}). A melhor forma de saber o que outras pessoas estão usando ou como estão se virando pra utilizar novas especificações é participando de comunidades de desenvolvimento, seja online em fórums e grupos ou offline em encontros e congressos. Acompanhe blogs e pessoas que falem sobre esses temas e se interesse em pesquisar sobre isso também.

## CSS4 e o futuro

Aqui e ali já começa a pipocar notícias do CSS4. A especificação de seletores do level 4, colors, media queries e vários outros já está em fase de rascunho, mas isso vai demorar bastante tempo pra começar a ser implantada de forma experimental em algum navegador. Veja bem, a especificação do multi-column layout, que é considerada estável desde 2011, é suportada no Brasil por [79% dos navegadores](http://caniuse.com/#search=columns){:target="_blank"}, sem flags. Até o IE10 tem suporte completo e o Opera, que propôs a especificação até hoje não suporta por completo! Não espero nada do level 4 com 90% de implementação antes de 2020.

## Conclusão

Se for anunciar uma vaga de emprego, diga apenas CSS. Não é porque faltou o 3 que todos os candidatos só vão saber fazer layouts com tables. Grande parte das pessoas que procuram por conteúdos (lívros, vídeos, ajuda em geral), estão em busca de atualização ou colocação no mercado e acabam sendo obrigadas a procurar pelo que é pedido. A bola de neve começa aqui.

Se for divulgar algum conteúdo, use o termo CSS, e se achar necessário, diga no conteúdo ou de alguma outra forma que você está se referindo a propriedades do CSS relativas a determinado level. E também, que diferença faz no final? A pessoa vai saber o mesmo CSS.

## Só mais uma coisa...

Ei, esse foi o primeiro post no meu blog próprio (antes eu alugava um quartinho nos fundos do Medium), no meu novo site. Aproveita e dá uma passeada por aí. Tem uns menus bem grandes ( ͡° ͜ʖ ͡°)