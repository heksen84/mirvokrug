<template>
  <div>
    <v-app>
     <v-content>
       <v-container grid-list-md fluid>
         <v-layout row wrap>

           <v-flex xs12 sm8>
             <v-card flat>
               <v-card-media src="images/logo2.jpg" height="650px">
               <v-container fluid grid-list-md>
                 <v-card color="cyan darken-2" class="white--text" flat>
                  <v-card-title primary-title>
                     <div class="display-2">мир на ладонях</div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark><div class="">социальная сеть для путешественников</div></v-btn>
                  </v-card-actions>
                </v-card>
               </v-container>
               </v-card-media>
             </v-card>
           </v-flex>

           <!--<v-flex md8>
             <v-card color="cyan darken-2" class="white--text" width="auto">
              <v-card-title primary-title>
                 <div class="display-2">мир на ладонях</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark><div class="">социальная сеть для путешественников</div></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>-->

           <v-flex xs12 sm4 dark color="primary" text-md-center class="pa-4">
             <v-form v-model="valid">
                <v-text-field
                  label="Имя"
                  v-model="name"
                  :rules="nameRules"
                  :counter="15"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <div><a href="javascript:;" @click.stop="terms = true">Забыли пароль?</a></div>
                <v-btn @click="submit" class="ma-2">войти</v-btn>
                <br>
                <br>
                <!--<div><a href="javascript:;" @click.stop="terms = true">Регистрация</a></div>-->
                <v-btn color="success" @click="submit">Регистрация</v-btn>
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
