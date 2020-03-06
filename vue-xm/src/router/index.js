import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/mymain'//重定向
  },
  {
	 path:'/mymain',
	 name:'mymain',
	 component: () => import(/* webpackChunkName: "mymain" */ '../views/Mymain.vue') 
  },
  {
	 path:'/myfind',
	 name:'myfind',
	 component: () => import(/* webpackChunkName: "mymain" */ '../views/Myfind.vue')
  },
  {
 	 path:'/mymessage',
     name:'mymessage',
    	  //路由栏加载,性能更好
     component: () => import(/* webpackChunkName: "mymessage" */ '../views/Mymessage.vue')
    },
    {
     path:'/myme',
     name:'myme',
    	  //路由栏加载,性能更好
     component: () => import(/* webpackChunkName: "myme" */ '../views/Myme.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router
