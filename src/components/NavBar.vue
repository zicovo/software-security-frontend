<template>
    <div>
        <v-app-bar app color="primary" dark>
       <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <router-link :to="{name: 'Home'}">
        <v-img 
       src="../../public/assets/logo-winkel.png"
       max-height="50"
       max-width="50"
       contain
       class="mx-2 mr-4"
      >
       
       </v-img>
      </router-link>
         

      
      <v-btn depressed rounded text :to="{name: 'Men'}">Men</v-btn>
      <v-btn depressed rounded text :to="{name: 'Women'}">Women</v-btn>
      <v-btn depressed rounded text :to="{name: 'Kids'}">Kids</v-btn>

      <v-spacer></v-spacer>
      <div v-if="!$auth.loading">
        <v-menu
        bottom
        offset-y
        min-width="210px"
      >
      <template v-slot:activator="{ on, attrs }">
         <v-btn icon  v-bind="attrs" v-on="on">
          <v-icon>
        fa4 fa-user
        </v-icon>
        </v-btn>
        </template>
        <v-card v-if="!$auth.isAuthenticated">
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-btn
                dark
                min-width="200px"
                @click="login"
              >
                login
                </v-btn>
                <!-- <v-divider class="my-1"></v-divider> -->
                <p class="caption mt-1 ml-2 mr-2 mb-0">
                New to this website? Register now!
              </p>
              </div>
            </v-list-item-content>
        </v-card>
        <v-card v-if="$auth.isAuthenticated">
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar
                color="orange"
              >
                <span class="white--text headline">{{this.initials}}</span>
                </v-avatar>
                  <h3 class="mt-2">{{this.nickName}}</h3>
                  <p class="caption mt-2">
                  {{this.email}}
                  </p>
                  <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Profile
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click="logout"
              >
                Logout
              </v-btn>
              </div>

            </v-list-item-content>
        </v-card>
          
      </v-menu>

        <v-btn icon>
          <v-icon>
            fa4 fa-shopping-cart
          </v-icon>
        </v-btn>
    </div>

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
      nickName(){
        return this.$auth.user.nickname
      },
      initials(){
        const fullName = this.$auth.user.name
        const initials = fullName.substring(0,2).toUpperCase()
        return initials
      },
      email(){
        return this.$auth.user.email
      }
    }
}
</script>

<style lang="scss" scoped>
</style>