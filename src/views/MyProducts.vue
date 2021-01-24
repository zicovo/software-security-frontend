<template>
    <div>
        <h1>My products</h1>
        <div v-if="this.Products.length == 0">
            
            <h2>You haven't created any products yet...</h2>
            <v-btn dark :to="{name: 'createProduct'}">Create one now</v-btn>
        </div>
       
         <v-row class="mt-5">
      <v-col v-for="product in Products" :key="product.id" md="3" sm="4" xs="6">

        <ProductItem :product="product"/>
      </v-col>
    </v-row>

    <div class="custom-spacer"></div>
    </div>
</template>

<script>
// import { getInstance } from '@/auth';
import { mapState } from 'vuex'
import ProductItem from '@/components/myProductItem'


export default {
  components: {
    ProductItem,
  },
 

  async created() {
    await this.getMyProducts();
    
  },

   computed: mapState({Products: state => state.Products.myProducts}),

  methods: {
    async getMyProducts() {
      //get accessToken
      // const instance = getInstance();

      // instance.$watch('loading', async loading => {
      //   if (!loading && instance.isAuthenticated) {
      //     const accesToken = await instance.getTokenSilently();
      //     // const products = await ProductService.getProducts(accesToken);
      //     this.$store.dispatch('Products/fetchProducts', accesToken);
      //   }
      // });

      this.$store.dispatch('Products/fetchMyProducts', this.$auth.user.sub);
      
    }
  }
};
</script>

<style lang="scss" scoped>

.custom-spacer{
    height: 400px;
}
</style>