<template>
    <div>
        <h1>Products</h1>

         <v-row class="mt-5">
      <v-col v-for="product in Products" :key="product.id" md="3" sm="4" xs="6">

        <ProductItemAdmin :product="product"/>
      </v-col>
    </v-row>

    <div class="custom-spacer"></div>
    </div>
</template>

<script>
// import { getInstance } from '@/auth';
import { mapState } from 'vuex'
import ProductItemAdmin from '@/components/ProductItemAdmin'


export default {
  components: {
    ProductItemAdmin,
  },
 

  async created() {
    await this.getProducts();
    console.log(this.Products)
    
  },

   computed: mapState({Products: state => state.Products.Products}),

  methods: {
    async getProducts() {

      this.$store.dispatch('Products/fetchProducts');
      
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-spacer{
    height: 250px;
}
</style>