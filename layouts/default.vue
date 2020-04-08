<template>
  <v-app class="app">

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="$vuetify.breakpoint.smAndUp"
      :permanent="$vuetify.breakpoint.smAndUp"
      mini-variant-width="91"
      app
    >
      <DrawerDefault/>
    </v-navigation-drawer>

    <v-app-bar class="app-bar"
               tile
               clipped-left
               flat
               app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <Search/>
      <LanguagesSelector/>
      <Authorization />
      <Chat />
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      Footer
    </v-footer>

  </v-app>
</template>

<script>
  import DrawerDefault from '~/components/layouts/DrawerDefault.vue'
  import Search from '~/components/layouts/Search.vue'
  import LanguagesSelector from '~/components/layouts/LanguagesSelector.vue'
  import Authorization from '~/components/layouts/Authorization.vue'
  import Chat from '~/components/layouts/Chat.vue'

  export default {
    components: {
      Search, DrawerDefault, LanguagesSelector, Authorization, Chat
    },
    data() {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
      }
    },
  }
</script>
