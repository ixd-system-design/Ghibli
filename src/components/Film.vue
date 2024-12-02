<script setup>

defineProps({ 
    film: { type: Object }
})

  import rtLogo from '../assets/rotten-tomatoes.svg';
  
</script>

<template>
    <article v-if="film">  
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

/* The banner div has a relative position. 
This allows us to position the text inside it absolutely.
While also maintaining an image below the text.  */
article .banner{
  position: relative;
  margin: 5rem 5rem 1rem 5rem;
}
/*On a small screen the banner doesn't really need such a big margin. */
@media (max-width: 900px) { article .banner{   margin: 1rem 0rem 1rem 0rem; }  }
article .banner img{
  width: 100%; 
  display:block; 
}
article .banner h2{
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background: rgba(8, 60, 152, .58);
  width: 100%;
  margin: 0;
  padding: 1rem 2rem;
  font-size: 3em;
  font-family: 'AntonaLight';
}

/* Styling for the description text */
article .details{
  margin: 5rem;
  font-size: 2rem;
  font-family: 'AntonaLight';

} 
@media (max-width: 900px) { 
    article .details, 
    article .widgets{   
        margin: 2rem;
    }  
}

/* Bold the first line only. */
/* See also: https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line  */
article .details ::first-line{
  font-family: 'AntonaBold';
}

/* A flex container for "widgets"*/
article .widgets{
  margin: 1rem 5rem;
  display: flex; 
  flex-flow: wrap;
  text-align: center; 
  gap: 1rem;  /* The space between flex items. */
}

/* The CSS for widget assumes a corresponding markup 
with a variety of classes (e.g. "data",  "unit",  "label") */
article .widget{ 
  padding: 3rem;
  flex-grow: 1;
}
article .widget .data{
  font-size: 2em;
  font-family: 'AntonaLight';
}
article .data .unit{
  font-size: 1rem;
  font-family: 'AntonaBold';
}
article .widget .label{
  text-transform: uppercase;
  font-size: 1.1em; 
  font-family: 'AntonaBold';
}

/* Some widgets have different colours. */
article .creators .widget{ 
  color: #fff;
  background:rgba(8, 60, 152, .6);
}
article .statistics .widget{ 
  color: #fff;
  background:rgba(17, 114, 74, 0.6);
}

</style>
