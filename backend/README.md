# Technical Share

## Começando

- É necessário ter o [Node](https://https://nodejs.org/en/) instalado na sua máquina  
- É necessário também instalar o [Yarn](https://yarnpkg.com/)

## Construção

Para termos o projeto pronto para execução necessitamos que digite o seguinte comando no terminal, estando dentro da paste em que o projeto está salvo, podendo utilizar npm ou yarn

```shell
npm install
```

```shell
yarn
```

Esse comando vai instalar todas as dependências necessárias para o correto funcionamento do projeto.

## Composição do projeto

Para o desenvolvimento do projeto foram utilizadas as seguintes ferramentas:

- NodeJS: Utilizado para construção do backend da aplicação
- Express: Pacote do Node para construção das rotas a serem consumidas na aplicação
- Dotenv: Pacote para carregar automaticamente as variáveis de ambiente a partir de um arquivo .env
- Nodemon: Pacote do Node utilizado para que se faça o autoreload do servidor cada vez que um arquivo do mesmo for modificado (utilizado somente como dependência de desenvolvimento)
- Firebase: Ferramenta da Google utilizada tanto como banco de dados (NoSQL - Realtime Database) quanto para a autenticação de usuário
- Swagger: Ferramenta utilizada para documentar o projeto. (/api-docs)

## Features

Nosso projeto trata-se de um sistema capaz de registrar usuários e seus interesses e agendar uma reunião com outro usuário, gerando o vinculo da tabela de reunião com o usuário anfitrião e o convidado.

## Inicialização do projeto

- Tendo as dependências carregadas pode-se executar um yarn dev para rodar a aplicação

 ```shell
 yarn dev
 ```

 Com o uso desse comando nosso servidor deverá estar rodando na porta 5000.
 OBS: Se essa porta estiver ocupada, pode-se mudar no arquivo `src/server.js`
 Devemos também rodar as nossas migrations para a construção da tabela de usuários no nosso banco de dados. fazemos isso através do comando

Depois de executados esses comandos podemos utilizar nossa aplicação normalmente e ver as suas funcionalidades no link <https://localhost:3333>

A aplicação também está hospedada na plataforma heroku no seguinte link: <https://teste-deploy-technicalshare.herokuapp.com/api-docs/#/>