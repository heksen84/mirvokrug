<template>
<div>
 <NavBar></NavBar>
  <b-container id="index_content">
  <b-row class="text-center">
	   <b-col>
       <br>
          <b-button variant="success" href="/newtrip">Новая поездка</b-button>
       <br>
       <br>
       <h2 class="grey">мои поездки</h2>
	   </b-col>
	</b-row>
  </b-container>
</div>
</template>
<script type="text/javascript">

import Vue from 'vue';
import NavBar from '../components/navbar.vue'

export default {
	data () {
    return 	{
			}
	},
components: { NavBar },
  methods: {
    hello() {
      alert("hello!");
    }
}
}
</script>
