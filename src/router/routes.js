export default [
    {
      path: '/',
      name: 'Login',
      component: ()=> import('@/views/Login.vue')
    },
    {
      path:'/auth',
      name: 'app-main',
      component: ()=> import('@/views/Master.vue'),
      children:[
        {
          name:'dashboard',
          path:'dashboard',
          component: ()=> import('@/views/Dashboard.vue')
        }
      ]
    }
  
  ]

