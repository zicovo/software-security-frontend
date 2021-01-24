<template>
    <div>
        <v-card class="mx-auto" max-width="344" outlined elevation="4">
            <v-card-title>{{product.name}}</v-card-title>
            <v-img :src="require('../../public/assets/products/' + product.img)" max-height="180px" min-height="180"></v-img>
            <v-card-text min-height="120">{{this.descriptionFormat(product.description)}}</v-card-text>
            <v-card-text>Price:  <strong> €{{product.price}} </strong></v-card-text>
            <v-card-actions>
                    <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
            >
      <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="red"
             v-bind="attrs"
             v-on="on"
             >delete</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Are you sure?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            dark
            @click="dialog = false"
          >
            cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            dark
            @click="deleteProduct"
          >
            delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    
    props: { product: {type: Object}},

     data() {
        return {
            dialog: false,
        }
    },

    methods: {
        descriptionFormat(desc){
            if(desc.length > 85){
                return desc.substring(0, 85).concat('...')
            }
            else{
        
                return desc
            }
            
        },
        deleteProduct(){
            console.log('DELETE CLICKED')
            this.$store.dispatch('Products/deleteProductAdmin', this.product)
            this.dialog = false
        }
    }
    
};
</script>

<style lang="scss" scoped>
</style>