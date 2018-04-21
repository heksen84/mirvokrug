require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import welcome from './views/welcome.vue'
import home from './views/home.vue'
import profile from './views/profile.vue'
import newtrip from './views/newtrip.vue'

Vue.use(Vuetify);
Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
    components: { welcome, profile, home, newtrip }
});
