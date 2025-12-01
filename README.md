# Ghibli

## VueJS 
This demo uses [VueJS](https://vuejs.org/) components to display films, fetched from the [Studio Ghibli API](https://ghibliapi.vercel.app/). It's a fairly simple use case, but it may offer a helpful intro to `VueJS`. You may like to explore how Vue Components are structured, and what problem they solve. Note, for example, how HTML, CSS, and JavaScript are combined in `src/components/Film.vue` by using `<script>`, `<template>`, and `<style>` tags. This is an example of a Vue [Single File Component](https://vuejs.org/guide/scaling-up/sfc) (SFC), which groups together functionality based on design concerns rather than by file-type.  
  
You might also also consider how Vue Components compare to using Vanilla JS with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Vite
When working with  Vue [Single File Components](https://vuejs.org/guide/scaling-up/sfc) we get a nice fluid developer experience, but one caviat is that the browser does not natively understand what a `.vue` file is. We must therefore compile the `.vue` into ordinary JavaScript so that it can be rended in the browser. Luckily the tools in this area are quite efficient.  [Vite](https://vite.dev) elegantly solves the need to compile/bundle our code, and also offers a fast development server for testing. 

## Setup
When working locally with this project, start by running `npm install` in the terminal to ensure that `Vite` and `Vue` are both ready to go. Then run `npm run dev` in order to start the Vite development server. Vite typically uses port 5173 if it's available, which means you can reach your site at [http://localhost:5173](http://localhost:5173). Any edits that you save will result in Vite automatically updating the changes in the browser. 

## Frontend Only
This project assumes a front-end only context. This means that it does not come with any backend features (no API, and no Express endpoints).
  
## GitHub Action
This template includes a GitHub Action workflow at `.github/workflows/main.yml`. The Action builds the Vite app to `/dest`. It then deploys the contents of `/dest` to production at `https://user.github.io/repository` 

## Vite Config
When deploying a repository to GitHub Pages, the repository name will by default become part of the URL path. (e.g. `https://user.github.io/repository` ) Vite has been configured in `vite.config.js` in order to dynamically understand this path based on a flag in the GitHub Actions build environment. During local development, Vite will assume a root of `/` but when building for produciton, it will instead use `/repository/` as the root.

## How to Use
- Make a new repository from this template. 
- In the Rpository Settings, go to `Pages`
- Under `Build and Deployment` change the `Source` to `GitHub Actions`
- Now, when you push changes, Vite will automatically build the Vue app, and GitHub will auto deploy the app to `https://user.github.io/repository`