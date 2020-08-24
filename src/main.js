import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import cCore from 'c-core-vue';
import cDesktop from 'c-vue-desktop';
import './styles/index.scss';

Vue.use(cCore);
Vue.use(cDesktop);
Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
