<script setup>
// import some Vue functionality
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

<style scoped> 

/* On a big screen we split the layout 30%/70%
Note the units are "vw" (viewport width) */
 nav { width: 30vw; }
 article{ width: 70vw; }


/* On a small screen the navigation moves to the top. */
@media (max-width: 900px) {  
   nav,  article { width: 100vw; }
}

/* the navigation is also a flex container but is has wrap enabled. 
it also has some justificaiton applied to the images. */
nav{ 
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: flex-start;
  align-content: flex-start; 
} 

/* Scale the menuItems in a responsive way */
nav .menuItem{  
  width: 33.333%;  
  cursor: pointer;
} 
@media (max-width: 900px) { nav .menuItem{   width: 14.2857%; }  }
@media (max-width: 600px) { nav .menuItem{   width: 16.667%; }  }


#loader {  
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30vw; 
  height: 100vh;
} 


/* On the welcome/ landing area, the content is fully centered. */
#welcome {  
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
} 
@media (max-width: 900px) { #welcome{   height: auto; }  }

</style>