<template>
    <div>
        <v-card class="mx-auto" max-width="344" outlined elevation="4">
            <v-card-title>{{product.name}}</v-card-title>
            <v-img :src="require('../../public/assets/products/' + product.img)" max-height="180px" min-height="180"></v-img>
            <v-card-text min-height="120">{{this.descriptionFormat(product.description)}}</v-card-text>
            <v-card-text>Price:  <strong> €{{product.price}} </strong></v-card-text>
            <v-card-actions>
                
        <v-dialog
            v-model="dialogEdit"
            persistent
            max-width="600"
            >
      <template v-slot:activator="{ on, attrs }">
            <v-btn 
            dark 
            color="orange" 
            v-bind="attrs"
            v-on="on" 
            class="mr-2">edit</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          Edit your product: 
        </v-card-title>

        <!-- edit form -->
        <ValidationObserver>

        <v-form @submit.prevent="submit">
       <validation-provider
        v-slot="{ errors }"
        name="title"
        rules="required"
      >
        <v-text-field
          v-model="product.name"
          :error-messages="errors"
          label="name"
          max-width="450"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="description"
        rules="required"
      >
        <v-text-field
          v-model="product.description"
          :error-messages="errors"
          label="description"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="price"
        rules="required"
        type="number"
        min="0"
      >
        <v-text-field
          v-model="product.price"
          :error-messages="errors"
          label="description"
          required
        ></v-text-field>
      </validation-provider>
        </v-form>
     </ValidationObserver>

        <!-- end form -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            dark
            @click="dialogEdit = false"
          >
            cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            dark
            @click="editProduct"
          >
            Update
          </v-btn>
        </v-card-actions>

      </v-card>

    </v-dialog>

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

        <v-row justify="center">
    
  </v-row>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
    props: { product: {type: Object}},

     components: {
        ValidationObserver: ValidationObserver,
        ValidationProvider: ValidationProvider
    },

    data() {
        return {
            dialog: false,
            dialogEdit: false,
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

        async editProduct(){
            this.dialogEdit = false

            this.$store.dispatch('Products/updateProduct', this.product)
        }, 

        async deleteProduct(){
            console.log('DELETE CLICKED')
            this.$store.dispatch('Products/deleteProduct', this.product)
            this.dialog = false
        }
    }
    
};
</script>

<style lang="scss" scoped>

.v-text-field{
      width: 550px;
      margin: 0 auto;
}
</style>