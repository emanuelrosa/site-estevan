---
layout: post
title: "Programação Froot Loops"
date: 2017-01-24 00:04:02
image: '/assets/img/froot-loops.png'
description: "Se você escreve código colorido, talvez esteja comprometendo sua concentração com cores em excesso."
tags:
- sublime
- sintaxe
- codigo
twitter_text: "O problema do código colorido e a concentração"
---

{% include image.html src="../assets/img/froot-loops.jpg" alt="Cereal colorido Froot Loops" caption="A função acima retorna true" %}

Desde que comecei a escrever código fora do bloco de notas padrão do Windows, meu código tem cores, que variam de acordo com algum fator que não entendi até hoje.

Comecei com o clássico fundo branco com texto escuro

{% include image.html src="../assets/img/light-brackets.png" alt="Brackets com tema claro" caption="Brackets com tema claro aleatório" %}

Mas em pouco tempo comecei a notar que chegava ao final de cada dia com os olhos secos, cansados e geralmente vermelhos.

{% include image.html src="../assets/img/sangue-zoio.jpg" alt="Ciclista com sangue nos olhos" caption="Ai que código lindo <3" %}

A escolha mais óbvia me pareceu mudar o tema para algum outro com fundo escuro, então chegamos ao Monokai.

{% include image.html src="../assets/img/monokai.png" alt="Tema Monokai no Brackets" caption="Tema Monokai no Brackets" %}

Desde então, nos últimos 3 anos, tenho vagado entre uma infinidade de temas a cada 6 meses em média. Fundo menos preto (Cobalt), cores menos brilhantes (Material), mas nunca fiquei completamente satisfeito com nenhum, tanto que quando tinha tempo de procurar outro, acabava mudando.

## A gota d'água

Até que uns dias atrás, voltei pra um tema claro, o Mac Classic padrão do Sublime, vindo do tema Material. Compare cada um.

{% include image.html src="../assets/img/mac-material.png" alt="Comparação entre o tema Mac Classic e Material do Sublime Text 3" caption="Comparação entre o tema Mac Classic e Material do Sublime Text 3" %}

Depois dessa mudança, parei pra analisar minhas últimas escolhas e coloquei lado a lado cada uma, o que trouxe alguns questionamentos à tona: qual o objetivo das cores? que problema elas resolvem?

Preste atenção na linha 19. Qual a necessidade de uma cor pra cada palavra? São 6 cores pra um *return* de um método com uma *string* como argumento!

Como em qualquer lugar em que estejam inseridas, **as cores são usadas desde sempre para chamar a atenção**.

{% include image.html src="../assets/img/colors.jpg" alt="Site com muitas cores, de vários tons, difícil de ler" caption="Site chamando atenção apenas pro que interessa" %}

Muitas cores chamando a atenção, onde quer que estejam (no site acima ou no código), reduzem a legibilidade do texto. Releia a linha 19 do tema escuro acima. Qual a necessidade de chamar a atenção para-cada-palavra-na-linha (leu pausado, né?)? A diferença pode ser da casa dos milésimos, senão menos, mas ao longo de um dia inteiro acabamos nos dispersando do nosso real objetivo como desenvolvedores: escrever código legível. E código legível não pode depender de cores.

O argumento de que a sintaxe colorida pode ajudar a encontrar erros como uma chave não fechada, por exemplo, não se sustenta usando um bom linter, como o [ESLint](http://eslint.org){:target="_blank"}.

O Douglas Crockford falou sobre isso um tempo atrás:

> [sintaxe colorida] É algo que está nos editores e IDEs para tornar fácil a programação para crianças do jardim de infância.

{% include video.html src="https://www.youtube.com/embed/dkZFtimgAcM" caption="A partir de 15m58s" %}

Crock zoeiro à parte, meu tema atual é esse, Vintage Terminal.

{% include image.html src="../assets/img/all-js.png" alt="Tema Vintage Terminal no JavaScript" caption="Tema Vintage Terminal no JavaScript" %}

## Conclusão

É a solução pras possíveis distrações que o código colorido de antes me trazia? Por enquanto tem sido. Estou testando há pouco tempo, mas o primeiro tabu, de que seria impossível compreender e escrever código com essa configuração, já derrubei. Vou usar pra sempre e essa é a solução para todas as distrações que um desenvolvedor pode ter? Não sei, nem você sabe, mas não custa tentar. O objetivo desse post, se você leu até aqui, não é converter ninguém (eu mesmo cheguei agora), e sim levantar alguns questionamentos sobre o que fazemos todo santo dia (escrever código, não mudar o tema do editor). Expressem suas opiniões abaixo!

O link pra download do tema está aqui embaixo, caso você queira testar. Além de simplesmente mudar a coloração do texto, também já tinha alterado o espaçamento de cada linha, fonte padrão e tamanho de fonte, diretamente em Preference > Settings no Sublime (Gist ao final).

Download do esquema de cores para o Sublime: [Vintage Terminal](https://packagecontrol.io/packages/Color%20Scheme%20-%20Vintage%20Terminal){:target="_blank"}

Gist de configurações do Sublime: {% gist estevanmaito/df2722bdc093c19b0889 %}