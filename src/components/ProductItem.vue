<template>
    <div>
        <v-card class="mx-auto" max-width="344" outlined elevation="4">
            <v-card-title>{{product.ProductName}}</v-card-title>
            <v-img :src="require('../../public/assets/products/' + product.ProductImageSrc)" max-height="180px" min-height="180"></v-img>
            <v-card-text min-height="120">{{this.descriptionFormat(product.ProductDescription)}}</v-card-text>
            <v-card-actions>
                    <v-btn dark >Add to Cart <v-icon class="ml-2">fa4 fa-shopping-cart</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    props: { product: {type: Object}},

    methods: {
        descriptionFormat(desc){
            if(desc.length > 85){
                return desc.substring(0, 85).concat('...')
            }
            else{
        
                return desc
            }
            
        }
    }
    
};
</script>

<style lang="scss" scoped>
</style>