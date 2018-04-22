<template>
  <div>
    <v-app>
     <v-content>
       <v-container grid-list-md fluid>
         <v-layout row wrap>
           <v-flex md8>


             <v-card color="cyan darken-2" class="white--text">
              <v-card-title primary-title>
                 <div class="display-2">мир на ладонях</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark><div class="">социальная сеть для путешественников</div></v-btn>
              </v-card-actions>
            </v-card>

           </v-flex>
           <v-flex md4 dark color="primary">
             <div class="title">вход</div>
             <v-form v-model="valid">
                <v-text-field
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-form>
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
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>
