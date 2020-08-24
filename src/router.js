import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/cia',
    },
    {
      path: '/cst',
      component: () => import('./views/CStatisticTotalDemo.vue'),
    },
    {
      path: '/cia',
      component: () => import('./views/CItemAlert.vue'),
    },
    {
      path: '/cbox',
      component: () => import('./views/CBox.vue'),
    },
  ],
});

export default router;
