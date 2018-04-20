require('./bootstrap');

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import welcome from './views/welcome.vue'
import home from './views/home.vue'
import newtrip from './views/newtrip.vue'

Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
    components: { welcome, home, newtrip }
});
