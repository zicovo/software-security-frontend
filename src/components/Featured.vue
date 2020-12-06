<template>
    <div>
        <v-row class="mt-5">
      <v-col>
        <v-sheet :height="this.sheetHeight" color="blue" rounded>
          <v-row>
            <v-col md="6" sm="12">
              <h2 class="ml-5">Continue shopping</h2>
              <h1 class="ml-5">Check out our new collection.</h1>
              <v-btn class="ml-5 mt-3" dark>Discover</v-btn>
              </v-col>
            <v-col md="6" sm="12">
              <v-img src="../../public/assets/featured.jpg" contain height="330" class="mt-2"></v-img>
              </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    </div>
</template>

<script>
    export default {
     computed: {
       sheetHeight(){
         let sheetHeight = 350;
        if(this.$vuetify.breakpoint.smAndDown){
          sheetHeight = 600
        }
         return sheetHeight;
       }
     },
     imageHeight(){
         let imageHeight = 300;
        if(this.$vuetify.breakpoint.smAndDown){
          imageHeight = 100
        }
         return imageHeight;
       }
     }   
    
</script>

<style lang="scss" scoped>

</style>