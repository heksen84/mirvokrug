<template>
  <div>
    <v-app>
     <v-content>
       <v-container grid-list-md fluid>
         <v-layout row wrap>

           <v-flex xs12 sm8>
             <v-card flat>
               <v-card-media src="images/logo6.jpg" height="650px">
               <v-container fluid grid-list-md>
                 <!--<v-card color="cyan darken-2" class="white--text" flat>
                  <v-card-title primary-title>
                     <div class="display-2">мир на ладонях</div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat dark><div class="">социальная сеть для путешественников</div></v-btn>
                  </v-card-actions>
                </v-card>-->
               </v-container>
               </v-card-media>
             </v-card>
           </v-flex>

           <v-flex xs12 sm4 dark color="primary" text-md-center class="pa-4">
             <v-card class="elevation-12" flat>
             <v-form v-model="valid">

                <!-- ПОЧТА -->
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required>
                </v-text-field>

                <!-- ПАРОЛЬ -->
                <v-text-field
                name="input-10-1"
                label="Пароль"
                hint="Не менее 8 символов"
                v-model="password"
                min="8"
                :append-icon="e1 ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
                required></v-text-field>

                <div><a href="/password/reset">Забыли пароль?</a></div>
                <br>
                <v-btn @click="submit" class="ma-4">войти</v-btn>
                </v-form>
            </v-card>
            <br>
            <br>
            <v-btn color="success" href="/register">Регистрация</v-btn>
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
      e1: true,
      e2: false,
      password: '',
      email: '',
      emailRules: [
        v => !!v || 'Введите e-mail',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Введите корректный E-mail '
      ]
    }),
    methods: {
      submit () {
      }
    }
  }
</script>
