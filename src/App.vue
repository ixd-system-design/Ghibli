<script setup>
// import someVue functionality
import { onMounted, ref } from 'vue' 

// import the Vue component for Films
import Film from './components/Film.vue'

// loading SVG via https://loading.io/  
import loader from './assets/loader.svg'
import ghibliLogo from './assets/ghibli.svg'
  
// Define some reactive variables.
// These variables are used in our template
// WHen the data changes the template will react automatically.
const films = ref([])
const selectedFilm = ref(null)
const loading = ref(true)

// when the App loads and mounts itself to the page
// it's a good time to fetch some data about films
onMounted( async () =>  {
    //see also: https://ghibliapi.vercel.app/
    const response = await fetch('https://ghibliapi.vercel.app/films')
    // adjust the value of our reactive variable. 
    // This will immediately cause the template to render
    // since we are using "films"  in our  Vue template below
    films.value = await response.json()
    // setting this reactive variable to false makes the template 
  // respond accordingly (i.e. hide the loader animation)
    loading.value = false 
})

  // this function is triggered
  // whenever we click on a film in the nav bar
  // it assigned the clicked film to be the selectedFilm
  // the template will react to this automatically.
  const showFilm = (clickedFilm) => {
      selectedFilm.value = clickedFilm;
  }
  
  
</script>

<template> 
      <!-- show a loader animation but only if "loading" == true
      Note: after fetching data we right away set "loading" = false.-->
      <div v-if="loading" id="loader"> 
          <img :src="loader"> 
      </div>

      <!-- 
      Using VueJS to loop over all films. 
      Each one is represented by an image.
      On click, VueJS opens opens the corresponding film.
       -->
      <nav id="films" v-if="films"> 
          <img v-for="(film, key) in films" 
            :key="film.id" 
            class="menuItem"  
            @click="showFilm(film)"  
            :src="film.image" > 
      </nav>

      <!-- pass the currently selectedFilm  as a "prop"
      to the Film component for rendering-->
      <Film :film="selectedFilm"></Film>

      <!-- Only show the welcome logo if we did not yet choose anything 
        that is, while "selectedFilm" remains blank-->
      <article id="welcome" v-if="!selectedFilm">
          <img :src="ghibliLogo" />
      </article> 
   
   
  
</template> 
