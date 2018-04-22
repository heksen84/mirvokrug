<template>
  <div>
    <v-app>
     <v-content>
       <v-container grid-list-md fluid>
         <v-layout row wrap>
           <v-flex xs12 sm8>
		PasswordReset
           </v-flex>
         </v-layout>
       </v-container>
     </v-content>
   </v-app>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Введите имя',
        v => v.length <= 15 || 'Name must be less than 15 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Введите e-mail',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
      submit () {
      }
    }
  }
</script>
