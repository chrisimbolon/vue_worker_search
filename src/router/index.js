import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobResultsView from '@/views/JobResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/jobs/results',
    name: 'jobresults',
    component: JobResultsView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
