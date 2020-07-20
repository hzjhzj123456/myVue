import Vue from 'vue';
import App from './App.vue';
import Router from './router'
import Store from './store'
import '../style/main.css'

new Vue({
  el:"#app",
  Router,
  Store,
  template:'<App/>',
  components: { App },
})