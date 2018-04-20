<template>
<div>
 <NavBar></NavBar>
  <b-container id="index_content">
  <b-row class="text-center">
	   <b-col>
       <b-button variant="success">Новая поездка</b-button>
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
}
}
</script>
