import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '@/components/Shop'
import Journal from '@/components/Journal'
import About from '@/components/About'
import Bespoke from '@/components/Bespoke'
import EUPage from '@/components/EU'
import MyAccount from '@/components/MyAccount'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Journal',
      name: 'Journal',
      component: Journal
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path:'/Bespoke',
      name: 'Bespoke',
      component: Bespoke
    },
    {
      path: '/EU',
      name: 'EUPage',
      component: EUPage
    },
    {
      path: '/MyAccount',
      name: 'MyAccount',
      component: MyAccount
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
