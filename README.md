<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Servicio Nest encargado de la actualización de datos de entidades y elementos dentro de una **Base de datos no relacional montada en Firebase** que intervienen en la participación de un torneo de fútbol (Cuadrangular).
Actualiza:
* **Información especifica de un partido de acuerdo de los resultados enviados (goles anotados).**.
* **Información especifica de un equipo de acuerdo de los resultados enviados (goles anotados).**.


## Installation

```bash
$ npm install
```


# Pruebas

## Puerto
```bash
port: 3010
```

## Rutas y envíos

## Actualizar Información de un partido

```bash
put('localhost:3010/match/:idTournament:/:idMatch')
body {
    "goals_team1": 3,
    "goals_team2": 2
}
```
<div align='center'>
    <img  src='https://i.imgur.com/g8EYZ9U.png'>
    <p>Petición de actualización datos de un partido.</p>
</div>
<div align='center'>
    <img  src='https://i.imgur.com/VldIKA9.png'>
    <p>Resultado actualización de datos de un partido.</p>
</div>


## Actualizar Información de un equipo

```bash
put('localhost:3010/team/:idTournament:/:idTeam')
body {
    "goals_local": 3,
    "goals_ops": 2
}
```
<div align='center'>
    <img  src='https://i.imgur.com/VSUm6x3.png'>
    <p>Petición de actualización datos de un equipo.</p>
</div>
<div align='center'>
    <img  src='https://i.imgur.com/YKfWHFg.png'>
    <p>Resultado actualización de datos de un equipo.</p>
</div>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).
