import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/projectList',
    name: 'ProjectList',
    component: () => import('../views/ProjectListPage.vue'),
    meta: {
      title: 'ProjectList'
    }
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: () => import('../views/ProjectPage.vue'),
    meta: {
      title: 'Project'
    }
  },
  {
    path: '/sprint/:id',
    name: 'Sprint',
    component: () => import('../views/SprintPage.vue'),
    meta: {
      title: 'Sprint'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

export default router
