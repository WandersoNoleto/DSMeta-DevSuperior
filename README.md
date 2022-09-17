# DSMeta

<div align="center">
  <img width="900px" height="400px" src="/readme-doc/documentation/mainpicture.png"/><center>
<div/>

<div align="left">
  <h3>:computer: Sobre</h3>
  Um projeto desenvolvida durante a semana SpringReact da <a href="https://devsuperior.com.br/">DevSuperior<a/> . É um aplicação fullstack e que tem como objetivo registrar os dados de um vendedor com foco no montante acumulado desde quando começou a trabalhar na empresa até a dada da última venda. É possível ainda filtrar os relatórios de acordo com um determinado período de tempo. 
  

## :rocket: Stack utilizada

**Front-end:** HTML, CSS, React

**Back-end:** Java com SpringBoot

## :key: Variáveis de Ambiente
A aplicação tem a funcionalidade de informar via SMS os dados do relatório de vendas 
de um determinado vendador ao número informado, utilizando-se da API da <a href="https://www.twilio.com/pt-br/">Twillio<a>. Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente:

`TWILIO_KEY`

`TWILIO_PHONE_FROM`

`TWILIO_PHONE_TO`

`TWILIO_SID`

<h6>São respectivamente: seu token de autenticação na API da Twillio, 
o número disponibilizado na API, o número para o qual os relatórios 
devem ser enviados e o ID da sua conta na Twillio.<h6>

<div/>




