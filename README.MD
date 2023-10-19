<img width="100%" src='https://socialify.git.ci/Player35Oficial/api-rest-church/image?font=Rokkitt&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&theme=Dark' alt='Socialify Background image'>

<h1 style="
  margin: 16px 0; 
  text-align: center;"
> API-REST-CHURCH </h1>
<p>
Esta é uma API criada a partir das habilidades desenvolvidas em:

[Curso Online de API REST com NODE e TYPESCRIPT](https://www.youtube.com/playlist?list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP) do [Lucas Souza Dev](https://www.youtube.com/@LucasSouzaDev/featured).

</p>

## Descrição do Projeto

<p>Esta api foi desenvolvida para que possa ser usada no desenvolvimento de interfaces utilizando javascript e suas bibliotecas/frameworks. Mas pode ser utilizada localmente por quaisquer linguagens e frameworks que desejar.</p>

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Player35Oficial/api-rest-church.git
```

Entre no diretório do projeto

```bash
  cd api-rest-church
```

Instale as dependências

```bash
  yarn install
```

Instale e configure o banco de dados

```bash
  yarn knex:migrate
```

Inicie o servidor (port: 3333)

```bash
  yarn start
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  yarn test
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

`NODE_ENV`

`IS_LOCALHOST`

`JWT_SECRET`

## Documentação

A Documentação pode ser lida ao iniciar o servidor com sucesso através do endpoint: **/api-docs**.
Ex: http://localhost:3333/api-docs

## Tecnologias utilizadas

<h3 style="
  margin: 16px 0; 
  text-align: center;"
>
  <a style="display: flex; align-items: center; gap: 16px" href='nodejs'>
  <img height="32" width="32" src="https://cdn.simpleicons.org/node.js" />
    Node.js
  </a>
</h3>
<p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.</p>

<h3 style="
  margin: 16px 0; 
  text-align: center;"
>
  <a style="display: flex; align-items: center; gap: 16px" href='typescript'>
  <img height="32" width="32" src="https://cdn.simpleicons.org/typescript" />
    Typescript
  </a>
</h3>
<p>TypeScript é uma linguagem de programação fortemente tipada baseada em JavaScript, oferecendo melhores ferramentas em qualquer escala.</p>

<h3 style="
  margin: 16px 0; 
  text-align: center;"
>
  <a style="display: flex; align-items: center; gap: 16px" href='knex'>
  <img height="32" width="32" src="https://knexjs.org/knex-logo.png" />
    Knex.js
  </a>
</h3>
<p>Knex.js (pronounced /kəˈnɛks/) is a "batteries included" SQL query builder for PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.</p>
<p>It features both traditional node style callbacks as well as a promise interface for cleaner async flow control, a stream interface, full-featured query and schema builders, transaction support (with savepoints), connection pooling and standardized responses between different query clients and dialects.</p>

<h3 style="
  margin: 16px 0; 
  text-align: center;"
>
  <a style="display: flex; align-items: center; gap: 16px" href='jest'>
  <img height="32" width="32" src="https://cdn.simpleicons.org/jest" />
    JEST
  </a>
</h3>
<p>Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade. Funciona com projetos usando: Babel, TypeScript, Node, React, Angular, Vue e muito mais!</p>

<h3 style="
  margin: 16px 0; 
  text-align: center;"
>
  <a style="display: flex; align-items: center; gap: 16px" href='swagger'>
  <img height="32" width="32" src="https://cdn.simpleicons.org/swagger" />
    SWAGGER
  </a>
</h3>
<p>Trata-se de uma aplicação open source que auxilia desenvolvedores nos processos de definir, criar, documentar e consumir APIs REST.  Em suma, o Swagger visa padronizar este tipo de integração, descrevendo os recursos que uma API deve possuir, como endpoints, dados recebidos, dados retornados, códigos HTTP e métodos de autenticação, entre outros.</p>

## Autores

- [@Player35Oficial](https://www.github.com/Player35Oficial)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
