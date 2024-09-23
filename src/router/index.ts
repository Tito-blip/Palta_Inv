import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/'
      },
      {
        path: 'Home',
        component: {
          template: '<ion-page><h1>Home Page Content</h1></ion-page>'
        }
      },
      {
        path: 'Storage',
        component: () => import('@/views/Storage/StoragePage.vue')
      },
      {
        path: 'Sales',
        component: () => import('@/views/Sales/SalesPage.vue')
      },
      {
        path: 'Tracking',
        component: () => import('@/views/Tracking/Tracking.vue')
      },
      {
        path: 'Stats',
        component: () => import('@/views/Stats/StatsPage.vue')
      },
      {
        path: 'Profile',
        component: () => import('@/views/Profile/ProfilePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
