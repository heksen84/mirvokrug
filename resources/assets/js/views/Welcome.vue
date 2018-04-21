<template>
  <div>
    <v-app>
     <v-content>
       <v-container>
         <v-btn color="success">Success</v-btn>
         <v-btn color="error">Error</v-btn>
         <v-btn color="warning">Warning</v-btn>
         <v-btn color="info">Info</v-btn>
       </v-container>
     </v-content>
   </v-app>
  </div>
</template>
<script>
export default {
	data () {
    return 	{
			}
	},
created() {
  alert("welcome");
},
  methods: {
}
}
</script>
