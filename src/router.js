import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // lazy loading, динамический импорт
      component: () => import('./views/Home.vue')
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue')
    },
  ]
})
