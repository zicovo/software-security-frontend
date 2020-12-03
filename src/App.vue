<template>
  <v-app>

      <v-container>
            <NavBar />
            <v-main>
                <router-view></router-view>
            </v-main>
      </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },

  methods: {}
};
</script>
