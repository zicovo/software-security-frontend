<template>
  <div class="home">
    <h2 class="mt-3 mb-3">Welcome! {{$auth.user.nickname}}</h2>
 
    <Carrousel/>
    <v-row class="mt-5">
      <v-col>
        <h2>Some classics</h2>
      </v-col>
    </v-row>
      <v-row class="mt-5">
      <v-col v-for="product in Products" :key="product.id" cols="3">
        <ProductItem :product="product"/>
      </v-col>
    </v-row>

    <Featured/>

    

  </div>
</template>

<script>
import { getInstance } from '@/auth';
import { mapState } from 'vuex'
import ProductItem from '@/components/ProductItem'
import Carrousel from '@/components/Carrousel'
import Featured from '@/components/Featured'


export default {
  name: 'home',
  components: {
    ProductItem,
    Carrousel,
    Featured,

  },
 

  async created() {
    await this.getProducts();
    
  },

   computed: mapState({Products: state => state.Products.Products}),

  methods: {
    async getProducts() {
      //get accessToken
      // const instance = getInstance();

      // instance.$watch('loading', async loading => {
      //   if (!loading && instance.isAuthenticated) {
      //     const accesToken = await instance.getTokenSilently();
      //     // const products = await ProductService.getProducts(accesToken);
      //     this.$store.dispatch('Products/fetchProducts', accesToken);
      //   }
      // });

      this.$store.dispatch('Products/fetchProducts');
      
    }
  }
};
</script>
