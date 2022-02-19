import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
  },

  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "basket" */ '../views/Basket.vue'),
  },

  {
    path: '/purchaseform',
    name: 'PurchaseForm',
    component: () =>
      import(/* webpackChunkName: "purchase_form"*/ '../views/PurchaseForm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
