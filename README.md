#  TEST FULLSTACK FRONT 🚀

## Table of Contents

1. [Set up](#setup)
1. [Structure](#structure)

## Setup

Set up your environment variables for development:

```sh
cp _develop.env .env
```

First you have to install dependencies and then start the project.

To install dependencies execute the following command:

```sh
$ npm install
```

To run the project execute the following command:

```sh
$ npm run dev
```

It will open a page in your default browser at [http://localhost:6000](http://localhost:6000).

## Structure

The project is split into the following directories. When writing code, use the following guidelines to determine where it should be placed. You can also take a look at the code yourself for in-depth examples.

```
src/
  app/
  components/
  constants/
  pages/
  routes/
  services/
  state/
  styles/
```

`src/app`

Redux configuration.

`src/components`

Components to be share for the whole application.

`src/constants`

Constants to be share for the whole application.

`src/pages`

Application pages.

`src/routes`

Here you must import application pages and add application routes.

`src/services`

Http requests.

`src/state`
