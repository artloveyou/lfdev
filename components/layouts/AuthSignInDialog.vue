<template>
  <v-dialog
    v-model="$store.state.signInDialog"
    width="420"
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

        <v-row class="pa-3">
          <v-col cols="12">
            <v-text-field
              dense
              label="Email or phone"
            ></v-text-field>
          </v-col>
            <v-col cols="12">
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-2"
                label="Password"
                class="input-group--focused pa-0 ma-0"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-checkbox
              class="pa-0 ma-0 description"
              value="1"
              label="Remember me"
              type="checkbox"
              required
            >
              <template v-slot:label>
                <span class="description">
                  Remember me</span>
                </span>
              </template>
            </v-checkbox>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <span class="description link">Forgot password?</span>
          </v-col>
          <v-col cols="12">
            <div
              class="btn default flex-center"
            >
              <div class="btn-text">
                SIGN IN
              </div>
            </div>
          </v-col>
          <v-col cols="12" class="pa-0 ma-0 d-flex justify-center">
            <span class="description">Or login via</span>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <div
              class="btn btn-small google flex-center"
            >
              <div class="btn-text">
                Google
              </div>
            </div>
          </v-col>
          <v-col cols="6" class="d-flex justify-start">
            <div
              class="btn btn-small facebook flex-center"
            >
              <div class="btn-text">
                Facebook
              </div>
            </div>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <span class="description">Not yet registered?
              <span
                class="link"
                @click="$store.commit('signInToRegistration')"
              ><b>Registration</b></span>
            </span>
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
        header: 'Log in to Profile',
        showPassword: false,
      }
    },
    components: {
      iconCross, Header
    },
  }
</script>

<style scoped>

</style>
