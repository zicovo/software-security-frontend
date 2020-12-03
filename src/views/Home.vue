<template>
  <div class="home">
    <h1>Choose your favorites now:</h1>
    <v-row>
      <v-col v-for="product in Products" :key="product.id" cols="3">
        <ProductItem :product="product"/>
      </v-col>
    </v-row>
      
  </div>
</template>

<script>
import { getInstance } from '@/auth';
import { mapState } from 'vuex'
import ProductItem from '@/components/ProductItem'

export default {
  name: 'home',
  components: {
    ProductItem
  },
  computed: mapState({Products: state => state.Products.Products}),

  async created() {
    await this.getProducts();
    console.log(this.$auth.user)
  },

  methods: {
    async getProducts() {
      //get accessToken
      const instance = getInstance();

      instance.$watch('loading', async loading => {
        if (!loading && instance.isAuthenticated) {
          const accesToken = await instance.getTokenSilently();
          // const products = await ProductService.getProducts(accesToken);
          this.$store.dispatch('Products/fetchProducts', accesToken);
        }
      });

      
    }
  }
};
</script>
