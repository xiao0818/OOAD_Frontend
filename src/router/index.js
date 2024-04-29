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
  {
    path: '/backlogItem/:id',
    name: 'BacklogItem',
    component: () => import('../views/BacklogItemPage.vue'),
    meta: {
      title: 'BacklogItem'
    }
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/TaskPage.vue'),
    meta: {
      title: 'Task'
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

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
