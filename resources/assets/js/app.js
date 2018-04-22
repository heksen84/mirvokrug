require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);

import welcome from './views/welcome.vue'
import home from './views/home.vue'
import profile from './views/profile.vue'
import newtrip from './views/newtrip.vue'
import passwordreset from './views/passwordreset.vue'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

const app = new Vue({
    el: '#app',
    components: { welcome, profile, home, newtrip, passwordreset }
});
