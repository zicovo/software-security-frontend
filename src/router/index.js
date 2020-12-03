import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Men from '../views/Men.vue';
import Women from '../views/Women.vue';
import Kids from '../views/Kids.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Women',
    name: 'Women',
    component: Women
  },
  {
    path: '/Men',
    name: 'Men',
    component: Men
  },
  {
    path: '/Kids',
    name: 'Kids',
    component: Kids
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
