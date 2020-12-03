import ProductService from '@/services/ProductService'

export const state = {Products: []}

export const namespaced = true;

export const mutations = {
    SET_PRODUCTS(state, products){
        state.Products = products
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
    }
}

export const getters = {}