import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 0,

    signInDialog: false,
    registrationDialog: false,
    chatDialog: false,
    cardsList: false

  },
  mutations: {
    changeCardsView(state) {
      state.cardsList === true ? state.cardsList = false : state.cardsList =true
    },
    closeRegistrationDialog(state) {
      state.registrationDialog = false
    },
    registrationToSignIn(state) {
      state.registrationDialog = false
      state.signInDialog = true
    },
    closeSignInDialog(state) {
      state.signInDialog = false
    },
    signInToRegistration(state) {
      state.signInDialog = false
      state.registrationDialog = true
    },
    closeChatDialog(state) {
      state.chatDialog = false
    },
    chatToSignIn(state) {
      state.chatDialog = false
      state.signInDialog = true
    },

  }
})

export default store
