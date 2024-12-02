# Ghibli
[![Open in Coder](https://ixdcoder.com/open-in-coder.svg)](https://ixdcoder.com/templates/Node/workspace?name=Ghibli&mode=auto&param.git_repo=https://bender.sheridanc.on.ca/system-design/ghibli&param.code_template=custom)

## VueJS 
This demo uses [VueJS](https://vuejs.org/) components to display films, fetched from the [Studio Ghibli API](https://ghibliapi.vercel.app/). It's a fairly simple use case, but it may offer a helpful intro to `VueJS`. You may like to explore how Vue Components are structured, and what problem they solve. Note, for example, how HTML, CSS, and JavaScript are combined in `src/components/Film.vue` by using `<script>`, `<template>`, and `<style>` tags. This is an example of a Vue [Single File Component](https://vuejs.org/guide/scaling-up/sfc) (SFC), which groups together functionality based on design concerns rather than by file-type.  
  
You might also also consider how Vue Components compare to using Vanilla JS with [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents).

## Vite
When working with  Vue [Single File Components](https://vuejs.org/guide/scaling-up/sfc) we get a nice fluid developer experience, but one caviat is that the browser does not natively understand what a `.vue` file is. We must therefore compile the `.vue` into ordinary JavaScript so that it can be rended in the browser. Luckily the tools in this area are quite efficient.  [Vite](https://vite.dev) elegantly solves the need to compile/bundle our code, and also offers a fast development server for testing. 

## Frontend Only
This project assumes a front-end only context. This means that it does not come with any backend features (no API, and no Express endpoints).
 