<template>
    <div>
        <v-card class="mx-auto" max-width="344" outlined elevation="4">
            <v-card-title>{{product.name}}</v-card-title>
            <v-img :src="require('../../public/assets/products/' + product.src)" max-height="180px" min-height="180"></v-img>
            <v-card-text>{{product.description}}</v-card-text>
            <v-card-actions>
                    <v-btn dark >Add to Cart <v-icon class="ml-2">fa4 fa-shopping-cart</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    props: { product: {type: Object}},
    
};
</script>

<style lang="scss" scoped>
</style>