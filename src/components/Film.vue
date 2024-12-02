<script setup>
defineProps({
  film: { type: Object }
})

  import rtLogo from '../assets/rotten-tomatoes.svg';
  
</script>

<template>

  <article id="film"  v-if="film">
  
  <!--
  In this banner, the text layout is flush with the bottom of the the image
  The text also uses a semi-transparent background so that it stands out better.
  Check out the corresponding CSS to see how its done.
  -->
  <div class="banner">
      <img :src="film.movie_banner">
      <h2 class="text-center">
          {{ film.title }} <br/> <span>{{ film.original_title }} </span>
      </h2>  
  </div>

  <!--
  Flexbox is helpful here to lay out the director and producer widgets. 
  Each widget grows to fill available space but wraps when we run out of space.
  HTML Markup and corresponding CSS help to differentiate the data from its label. 
  -->
  <div class="widgets creators">
      <div class="widget"> 
          <div class="data">{{ film.director }}</div>
          <div class="label">Film Director</div>
      </div>
      <div class="widget">
          <div class="data">{{ film.producer }}</div>
          <div class="label">Film Producer</div>
      </div>
  </div> 

  <!--
  Generous sized type makes the description come to life.
  the first line is bolded using a CSS pseudo class. 
  -->
  <div class="details"> 
      <p> {{ film.description }} </p>
  </div>

  <!--
      Stats widgets are styled similarly to the creators area
  -->
  <div class="widgets statistics">
      <div class="widget"> 
          <div class="data">{{ film.release_date }}</div>
          <div class="label">Released</div>
      </div> 
      <div class="widget"> 
          <div class="data">
              {{ film.running_time }}
              <span class="unit">min</span>
          </div>
          <div class="label">Running Time</div>
      </div> 
      <div class="widget"> 
          <div class="data">
              {{ film.rt_score }}
              <span class="unit">%</span>
          </div>

          <div class="label"> 
              <img style="width:100px;" alt="Rotten Tomatoes" :src="rtLogo" />
          </div>
      </div> 
  </div> 


    
    </article>


</template>

<style scoped> 
</style>
