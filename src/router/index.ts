import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home', 
  },
  {
    path: '/Home',
    component: () => import('@/views/Home/HomePage.vue')
  },
  {
    path: '/Storage',
    component: () => import('@/views/Storage/StoragePage.vue')
  },
  {
    path: '/ProductDetails/:id',
    component: () => import('@/views/Storage/ChildProduct.vue')
  },
  {
    path: '/Sales',
    component: () => import('@/views/Sales/SalesPage.vue')
  },
  {
    path: '/Tracking',
    component: () => import('@/views/Tracking/Tracking.vue')
  },
  {
    path: '/Stats',
    component: () => import('@/views/Stats/StatsPage.vue')
  },
  {
    path: '/Debug',
    component: () => import('@/Debug.vue')
  },
  {
    path: '/Login',  
    component: () => import('@/views/Forms/Login/LoginForm.vue')
  },
  {
    path: '/Register',
    component: () => import('@/views/Forms/Register/RegisterForm.vue')
  },
  {
    path: '/addProduct',
    component: () => import('@/views/Forms/Add Product/AddProductForm.vue')
  },
  {
    path: '/Profile',
    component: () => import('@/views/Profile/ProfilePage.vue')
  },
  {
    path: '/auth',
    component: () => import('@/components/Auth.vue')
  },
  {
    path: '/Welcome',
    component: () => import('@/views/Welcome/Welcome.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
