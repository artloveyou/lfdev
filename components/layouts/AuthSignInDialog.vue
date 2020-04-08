<template>
  <v-dialog
    v-model="$store.state.signInDialog"
    width="370"
  >

    <template v-slot:activator="{ on }">

      <span
        v-on="on"
      >
        Sign In
      </span>

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
              @click="$store.commit('closeSignInDialog')"
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
              class="flex-center"
              @click="$store.commit('signInToRegistration')"
            >
              signInToRegistration
            </div>
          </v-col>
        </v-row>

      </v-container>
    </v-card>

  </v-dialog>
</template>

<script>
  import iconCross from '~/assets/icons/iconCross.vue'
  import Header from '~/components/Header.vue'

  export default {
    data(){
      return {
        header: 'Sign In',
      }
    },
    components: {
      iconCross, Header
    },
  }
</script>

<style scoped>

</style>
