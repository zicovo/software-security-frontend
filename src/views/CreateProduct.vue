<template>
    <div>
        <h1>Create a new product</h1>
         <v-alert
          v-if="showSuccess"
          type="success"
          >
          Your product was created successfully!
          </v-alert>
           <v-alert
          v-if="showFail"
          type="warning"
          >
          Oops something went wrong while creating your product, please try again!
          </v-alert>
        <ValidationObserver
       ref="observer"
     >
      <form @submit.prevent="submit">
       <validation-provider
        v-slot="{ errors }"
        name="title"
        rules="required"
      >
        <v-text-field
          v-model="product.title"
          :error-messages="errors"
          label="title"
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
      >
        <v-text-field
          v-model="product.price"
          :error-messages="errors"
          label="price"
          type="number"
          min="0"
          required
        ></v-text-field>
      </validation-provider>


      <v-btn
        class="mr-4"
        type="submit"
        color="green"
        dark
      >
        submit
      </v-btn>
      </form>
     </ValidationObserver>

    <div class="custom-spacer"></div>
    </div>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import ProductService from '@/services/ProductService'

  setInteractionMode('eager')


  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })
    export default {

     components: {
      ValidationProvider,
      ValidationObserver,
    },

        data() {
            return {
                product: {
                    title: '',
                    description: '',
                    price: ''
                },
                showSuccess: false,
                showFail: false
            }
        },

        methods: {
            async submit(){
        this.$refs.observer.validate()
        try {
          const newProduct = {
            name: this.product.title,
            description: this.product.description,
            price: parseFloat(this.product.price),
            img: 'adidas.jpg',
            user_id: this.$auth.user.sub
          }
          console.log(newProduct)
          const token = await this.$auth.getTokenSilently()
          const data = await ProductService.createProduct(token, newProduct)
          if(!data){
              this.showFail = true
          }
          else{
              this.showSuccess = true
          }
          console.log(data)
        } catch (error) {
          console.log(error)
        }
        this.clear()
    },

    clear(){
        this.product.name = ''
        this.product.title = ''
        this.product.price = ''
        this.$refs.observer.reset()
    }

  }
}
    
</script>

<style lang="scss" scoped>
.custom-spacer{
    height: 250px;
}
</style>