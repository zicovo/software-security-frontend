import Vue from 'vue';
import VueRouter from 'vue-router';
import multiguard from 'vue-router-multiguard';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Products from '../views/Products.vue';
import completeProfile from '../views/completeProfile.vue';
import CreateProduct from '../views/CreateProduct.vue';
import MyProducts from '../views/MyProducts.vue';
import { authGuard } from '../auth/authGuard'
import { isUserCompleted } from '../auth/isUserCompleted'
import { userInit } from '../auth/userInitialised'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: multiguard([authGuard, isUserCompleted])
  },
  {
    path: '/completeProfile',
    name: 'completeProfile',
    component: completeProfile
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/createProduct',
    name: 'createProduct',
    component: CreateProduct,
    beforeEnter: multiguard([authGuard, isUserCompleted])

  },
  {
    path: 'myProducts',
    name: 'MyProducts',
    component: MyProducts,
    beforeEnter: multiguard([authGuard, isUserCompleted])

  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


//global route guards

router.beforeEach((to, from, next) => {
  userInit()
  next()
})

export default router;
