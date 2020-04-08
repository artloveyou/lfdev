<template>

  <v-dialog
    v-model="$store.state.chatDialog"
    width="370"
  >

    <template v-slot:activator="{ on }">

        <div class="chat-menu flex-center"
             v-on="on"
             icon>
          <div class="chat-icon">
            <iconChat/>
          </div>
        </div>

    </template>

    <v-card>
      <v-container>
        <v-row class="card-settings">
          <v-col>
            <Header class="card-header" :header="header"/>
          </v-col>
          <v-col cols="2" class="d-flex justify-end">
            <v-btn
              icon
              @click="$store.commit('closeChatDialog')"
            >
              <iconCross
                class="icon icon-cross"
              />
            </v-btn>
          </v-col>
        </v-row>
        <v-row>

          <v-col class="pa-1">
            <div
              class="btn sign-in flex-center"
              @click="$store.commit('chatToSignIn')"
              >
              <div class="btn-text">
                SIGN IN
              </div>
            </div>

          </v-col>

          <v-col class="pa-1">
            <div class="btn demo-mode flex-center">
              <div class="btn-text">
                DEMO MODE
              </div>
            </div>
          </v-col>
        </v-row>

      </v-container>
    </v-card>

  </v-dialog>

</template>

<script>
  import iconChat from '~/assets/icons/iconChat.vue'
  import iconCross from '~/assets/icons/iconCross.vue'
  import Header from '~/components/Header.vue'

  export default {
    data(){
      return {
        header: 'Already registered?',
      }
    },
    components: {
      iconChat,
      iconCross, Header
    },
  }
</script>

<style scoped>
  .chat-menu {
    cursor: pointer;
    padding: 5px 20px 0 25px;
  }
  .chat-icon {
    fill: #8e9aac;
    height: 30px;
    width: 30px;
  }

  .sign-in {
    margin-left: 15px;
    background-color: #3b4b68;
  }

  .demo-mode {
    margin-right: 15px;
    background-color: #3498db;
  }
</style>
