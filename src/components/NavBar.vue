<template>
    <div>
        <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          srs="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <!-- src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" -->
      </div>
      <v-toolbar-title>Software security</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!$auth.loading">
      <v-btn v-if="!$auth.isAuthenticated" @click="login">Login</v-btn>

      <span class="mr-5" v-if="$auth.isAuthenticated">{{welcome}}</span>


      <v-btn v-if="$auth.isAuthenticated" @click="logout" class="mr-5">Logout</v-btn>
    </div>

     <v-avatar v-if="$auth.isAuthenticated"
         size="40"
         class="mr-2"
         color="#272727"
      >ZVO
     </v-avatar>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    methods: {
         // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
    },

    computed:{
      welcome(){
        return `Welcome! ${this.$auth.user.nickname}`
      }
    }
};
</script>

<style lang="scss" scoped>
</style>