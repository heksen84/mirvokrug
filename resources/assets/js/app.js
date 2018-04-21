require('./bootstrap');

import vue from 'vue'
import vuetify from 'vuetify'
import welcome from './views/welcome.vue'
import home from './views/home.vue'
import profile from './views/profile.vue'
import newtrip from './views/newtrip.vue'

Vue.use(vuetify);

const app = new Vue({
    el: '#app',
    components: { welcome, profile, home, newtrip }
});
