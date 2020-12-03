<template>
    <div>
        <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
        <v-row
          align="center"
          justify="center"
        >
          <v-img contain position="center center" :src="require('../../public/assets/showcase/' + slide)"></v-img>
        </v-row>
    </v-carousel-item>
  </v-carousel>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        slides: [
          'showcase-1.jpg',
          'showcase-2.jpg',
          'showcase-3.jpg',
          'showcase-4.jpg',
        ],
      }
    },
  }
</script>

