import Vue from 'vue'
import Router from 'vue-router'
import VuexText from '@/text/vuexText'
import Myhome from '@/text/myhome' 
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      component:Myhome,
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: VuexText
    }
  ]
})