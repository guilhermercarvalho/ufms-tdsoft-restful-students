<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://raw.githubusercontent.com/guilhermercarvalho/ufms-template/main/images/ufms_logo.png" alt="Logo" width="auto" height="200">
  </a>

  <h1 align="center">Universidade Federal de Mato Grosso do Sul</h1>

  <h3 align="center">Técnicas Avançadas de Desenvolvimento de Software</h3>

  <h3 align="center">Hudson Silva Borges</h3>

  <h3 align="center">API RESTful para consultar dados de alunos</h3>
</p>

## Sobre

Nesta atividade o objetivo é colocar em prática os conhecimentos relacionados às definições de serviços web e suas aplicações.

Portanto, é proposto um problema com escopo bastante restrito: **gestão de alunos de uma disciplina**.

Uma pequena aplicação que fará a gestão do registro de alunos de uma disciplina. Essa aplicação deverá permitir a inserção, alteração e consulta de alunos. [Os detalhes de cada uma das funcionalidades que deverão ser implementadas](https://www.notion.so/Cria-o-de-um-Servi-o-RESTful-6b1269e16fca435984ae7a6f9ae89964).

Foram utilizadas práticas de _Clean Code_ e _Clean Architecture_ para o desenvolvimento dessa aplicação.

## Tecnologia

### Linguagens e Frameworks

- Node
- TypeScript
- TypeORM
- Express

### Banco de Dados

#### SQL
  
  - Postgres
  - MySQL
  - SQLite

#### NoSQL

  - Redis

### Ferramentas Utilizadas

- Visual Studio Code (VSCode).
- Docker

## Começando

Recomenda-se o uso da extensão [Remote Development Container](https://code.visualstudio.com/docs/remote/containers) para execução adequada do ambiente de desenvolvimento. Este foi criado utilizando containers com variáveis de ambiente pré-configuradas possibilitando a execução de toda a aplicação. Os containers são:

- **restfull-students-app**: container da aplicação
- **restfull-students-db-postgres**: container do banco de dados PostgreSQL
- **restfull-students-db-mysql**: : container do banco de dados MySQL
- **restfull-students-cache-redis**: : container de cache Redis

### Pré-requisitos

Para executar corretamente o projeto é necessário ter Node, NPM, Docker e VSCode instalados.

## Uso

### Instalação

```sh
node install
```

### Inciar Aplicação em Desenvolvimento

```sh
node run dev
```

### Definir Banco de Dados

A variável de ambiente `CURRENT_DATABASE` define o banco de dados a ser utilizado pela aplicação (por padrão é PostgreSQL). Os valores possíveis são:

- postgres (padrão)
- mysql
- sqlite

  ```env
  # PostgreSQL database
  POSTGRES_HOST=
  POSTGRES_PORT=
  POSTGRES_USER=
  POSTGRES_PASSWORD=
  POSTGRES_DATABASE=

  # MySQL database
  MYSQL_HOST=
  MYSQL_PORT=
  MYSQL_USER=
  MYSQL_PASSWORD=
  MYSQL_DATABASE=

  # SQLite database filename
  SQLITE_DATABASE=

  # Choose the database of application (postgres, mysql, sqlite)
  CURRENT_DATABASE=
  ```

## Licensa

Distribuído sob a licença [MIT][license-url]. Veja `LICENSE` para mais informações.

## Contato

Guilherme Carvalho - [Linkedin][linkedin-url] - dev.carvalho@protonmail.com

  <!-- LINKS & IMAGES -->

[ufms-logo]: https://raw.githubusercontent.com/guilhermercarvalho/ufms-template/main/images/ufms_logo.png
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-url]: https://www.linkedin.com/in/guilhermercarvalho/
