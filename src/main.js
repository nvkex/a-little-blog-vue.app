import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routesFile from './router.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const ROUTER = new VueRouter({
  routes:routesFile,
  mode: 'history'
});

Vue.filter('snippet', function(value){
  return value.slice(0,100) + "...";
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: ROUTER
})
