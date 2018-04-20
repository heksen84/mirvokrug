<template>
<div>
 <NavBar></NavBar>
  <b-container id="index_content">
  <b-row class="text-center">
	<b-col>
    <br>
    <div id="title">мир вокруг</div>
      <div id="desc">социальная сеть для путешественников</div>
         <br>
			      <b-button variant="success" href="/login">Вход</b-button>
			      <b-button variant="success" href="/register">Регистрация</b-button>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         <br>
         МирВокруг - путешествуй и обретай новых друзей
  </b-col>
  <br>
	</b-row>
  </b-container>
<br>
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
