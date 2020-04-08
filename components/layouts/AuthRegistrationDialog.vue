<template>
  <v-dialog
    v-model="$store.state.registrationDialog"
    width="370"
  >

    <template v-slot:activator="{ on }">

      <span
        v-on="on"
        class="reg">
        Registration
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
              @click="$store.commit('closeRegistrationDialog')"
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
              @click="$store.commit('registrationToSignIn')"
            >
              registrationToSignIn
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
        header: 'Registration',
      }
    },
    components: {
      iconCross, Header
    },
  }
</script>

<style scoped>
  .reg {
    margin: 0 0 0 6px;
  }
</style>
