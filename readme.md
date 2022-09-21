# React Typescript boilerplate

This is an attempt at facilitating the starting of a new project with the
following features:

* Basic Technologies
  * TypeScript
  * ReactJS
* Styling
  * СSS importing
  * Sass support
  * Image importing
* Performance
  * JS Minification
  * CSS Minification
* Linting
  * ESLint
* Modern ES6 for using template strings, JSX syntax, object destructuring, arrow functions and more
* Babel for old browser support
* Hot Module Replacement for comfortable development

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:KondratevDm/webpack-boilerplate.git
  ```

2. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *Or*

  ```shell
  $ npm install
  ```
3. Create first build

  ```shell
  $ yarn run build
  ```

Prepares your app for deployment to production environment. Optimizes and minifies all files, piping them to the `dist` folder.

4. Run project in development mode

  ```shell
  $ yarn run dev
  ```

Prepares your app for deployment to development environment.

5. Run project in development mode with HMR

  ```shell
  $ yarn run start
  ```

Starts the development server running on `http://localhost:3000` with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

6. Visualize size of webpack output files with an interactive zoomable treemap

  ```shell
  $ yarn run stats
  ```

It will create an interactive treemap visualization of the contents of all your bundles