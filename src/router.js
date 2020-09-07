import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Todos from './views/Todos.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // lazy loading, динамический импорт
      // component: () => import('./views/Home.vue')
      component: Home,
    },
    {
      path: '/todos',
      component: Todos,
    },
  ]
})
