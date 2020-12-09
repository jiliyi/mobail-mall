import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home';
import List from '@/views/List';
import ShoppingCar from '@/views/ShoppingCar'
import Search from '@/views/Search'
const routes = [
  {
    path :'/',
    name : 'home',
    component : Home,
    redirect : '/list',
    children : [
      {
        path : '/list',
        component : List,
        name : 'list'
      },
      {
        path : '/shoppingcar',
        name :'shoppingcar',
        component : ShoppingCar
      },
      {
        path : '/search',
        name : 'search',
        component : Search
      }
    ]
  },
  {
    path : '*',
    redirect : '/'
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
