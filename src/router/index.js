import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
// import HomePage from '../views/HomePage.vue'
import TabsPage from '../views/TabsPage.vue'
// import tab4 from '../views/Tab4Page.vue' ;
const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab6',
        component: () => import('@/views/Tab6Page.vue')
      },
      {
        path: 'tab7',
        component: () => import('@/views/Tab7Page.vue')
      }
      ,
      {
        path: 'tab8',
        component: () => import('@/views/Tab8Page.vue')
      }
      ,
      {
        path: 'tab9',
        component: () => import('@/views/Tab9Page.vue')
      }
      ,
      {
        path: 'tab4',
        name: 'tab4',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
