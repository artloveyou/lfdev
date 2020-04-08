<template>
  <div>

<!--    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>-->

<!--    <v-dialog v-model="$store.state.signInDialog">-->
<!--      <template v-slot:activator="{ on }">-->
<!--        <v-btn v-on="on">-->
<!--          Sign In-->
<!--        </v-btn>-->
<!--      </template>-->

<!--      <v-btn @click="signInDialog = false">-->
<!--        Close SignIn-->
<!--      </v-btn>-->
<!--      <v-btn @click="RegistrationToSignIn">-->
<!--        Go Auth-->
<!--      </v-btn>-->
<!--    </v-dialog>-->




<!--    <v-dialog v-model="registrationDialog">-->
<!--      <template v-slot:activator="{ on }">-->
<!--        <v-btn v-on="on">-->
<!--          Auth-->
<!--        </v-btn>-->
<!--      </template>-->

<!--      <v-btn @click="registrationDialog = false">-->
<!--        Close Auth-->
<!--      </v-btn>-->
<!--      <v-btn @click="SignInToRegistration">-->
<!--        Go sign in-->
<!--      </v-btn>-->
<!--    </v-dialog>-->




<!--    <v-dialog v-model="$store.state.chatDialog">-->
<!--      <template v-slot:activator="{ on }">-->
<!--        <v-btn v-on="on">-->
<!--          Chat-->
<!--        </v-btn>-->
<!--      </template>-->
<!--      -->
<!--      <v-btn @click="$store.commit('closeChatDialog')">-->
<!--        Close Chat-->
<!--      </v-btn>-->
<!--      <v-btn @click="$store.commit('ChatToSignIn')">-->
<!--        Go Sign In-->
<!--      </v-btn>-->
<!--    </v-dialog>-->



  </div>
</template>

<script>
  export default {
    data() {
      return {
        signInDialog: false,
        registrationDialog: false,
        chatDialog: false
      }
    },
    methods: {
      SignInToRegistration: function(){
        this.chatDialog = false;
        this.signInDialog = true
      },
      RegistrationToSignIn: function(){
        this.signInDialog = false;
        this.registrationDialog = true
      },
      ChatToSignIn: function(){
        this.chatDialog = false;
        this.signInDialog = true
      },
    }
  }
</script>

<style scoped>

</style>
