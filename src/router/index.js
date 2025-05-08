import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      //   { path: '', component: () => import('@/views/UsersList.vue') },
      //   { path: ':id', component: () => import('@/views/UserDetail.vue') }
    ]
  },
  {
    path: '/tasks',
    component: () => import('@/views/Tasks.vue'),
    children: [
      //   { path: '', component: () => import('@/views/UsersList.vue') },
      //   { path: ':id', component: () => import('@/views/UserDetail.vue') }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Home.vue') // Ideally replace with a NotFound.vue
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
