import ProductService from '@/services/ProductService'
import { getInstance } from '../../auth/index';

export const state = {Products: [], myProducts: []}

export const namespaced = true;

export const mutations = {
    SET_PRODUCTS(state, products){
        state.Products = products
    },
    SET_MY_PRODUCTS(state, myProducts){
        state.myProducts = myProducts
    },
    DELETE_PRODUCT(state, deletedProduct){
        const index1 = state.Products.indexOf(deletedProduct)
        const index2 = state.myProducts.indexOf(deletedProduct)
        if (index1 > -1) {
            state.Products.splice(index1, 1);
        }
        if(index2 > -1){
            state.myProducts.splice(index2, 1)
        }
    }
}

export const actions = {
    async fetchProducts({ commit }){
    try {
        const products = await ProductService.getProducts()
        console.log(products)
        commit('SET_PRODUCTS', products)
    } catch (error) {
        console.log(error)
    }
    },

    async fetchMyProducts({ commit }, userId){
        try {
            const authService = await getInstance()
            const token = await authService.getTokenSilently()
            const myProducts = await ProductService.getMyProducts(token, userId)
            console.log(myProducts)
            commit('SET_MY_PRODUCTS', myProducts)
        } catch (error) {
            console.log(error)
        }
    },

    async deleteProduct({commit}, product){
        try{
            const authService = await getInstance()
            const token = await authService.getTokenSilently()
            const deleteProduct = await ProductService.deleteProduct(token, product)
            console.log(deleteProduct)
            commit('DELETE_PRODUCT', product)
        }
        catch(error){
            console.log(error)
        }
    },

    async updateProduct({commit}, product){
        try{
            const authService = await getInstance()
            const token = await authService.getTokenSilently()
            const deleteProduct = await ProductService.updateProduct(token, product.id)
            console.log(deleteProduct)
            commit('UPDATE_PRODUCT', product)
        }
        catch(error){
            console.log(error)
        }
    }
}

export const getters = {}