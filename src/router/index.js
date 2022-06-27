import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
console.log(routes)

import { defStore } from '../store/index'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.keepAlive && !defStore().include.includes(to.name)) {
    defStore().$patch((state) => (state.include = [...state.include, to.name]))
  }
  if (!router.hasRoute(to.name)) {
    router.addRoute({
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue')
    })
    next({ name: '404' })
  } else {
    next()
  }
})
export default router
