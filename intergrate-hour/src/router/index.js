import {
    createRouter,
    createWebHistory
  } from 'vue-router'
  import HomeView from '../views/Home.vue'
  
  const router = createRouter({
    history: createWebHistory(
      import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          requiresAuth: true
        }
      }
  
  
  
      // * 在创建新的路由时请注意添加 meta: { requiresAuth: true } 以确保该路由需要登录才能访问
      // {
      //   path: '/about',
      //   name: 'about',
      //   // route level code-splitting  
      //   // this generates a separate chunk (About.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import('../views/AboutView.vue')
      // }
    ]
  })
  
  
  //   router.beforeEach((to, from, next) => {
  //     const isAuthenticated = sessionStorage.getItem('token')
  //     if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
  //       next('/login')
  //     } else {
  //       next()
  //     }
  //   })
  
  export default router