require('./bootstrap');

import Vue from 'vue'
import Vuetify from 'vuetify'
import welcome from './views/welcome.vue'
import home from './views/home.vue'
import profile from './views/profile.vue'
import newtrip from './views/newtrip.vue'
import passwordreset from './views/auth/passwordreset.vue'
import login from './views/auth/login.vue'
import register from './views/auth/register.vue'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    components: { welcome, profile, home, newtrip, passwordreset, login, register }
});
