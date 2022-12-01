# Consulta de nomes do IBGE!

Este projeto foi desenvolvido na Facudade de Tecnologia da Unicamp, na disciplina de Resolução de Problemas 1.

## Tecnologias utilizadas:  
- Linguagem principal: Typescript;
- Framework Frontend: React.JS;
- Outras tecnologias: HTML, CSS;
- Requisições: Axios (UM cliente HTTP que se baseia em promises para fazer as requisições);
- Biblioteca de gráficos: Victory;
  
## Autores
- Aline Almeida Vajalegre
- Lucas Santana Aguiar
- Lucas dos Santos
- Victor Eduardo Zorzan

## Página inicial
Na página inicial do projeto, ele traz um ranking dos nomes mais populares no Brasil, retirados dinâmicamente da API do IBGE, disponível em https://servicodados.ibge.gov.br/api/docs/nomes?versao=2

## Pesquisa por nomes 
A pesquisa não funciona com nomes compostos e acentuações.
Os dados são trazidos dinâmicamente desde 1930 até 2010, mostrando o nome, e sua frequência em cada faixa de período desde a data inicial que ele foi registrado.

## Como compilar o projeto?
1- Faça o download do node package manager, mais informações em: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

2- Clone o repositório

3- Digite `npm start` e abra http://localhost:3000 no navegador

