<template>
  <v-app class="app">

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="$vuetify.breakpoint.smAndUp"
      :permanent="$vuetify.breakpoint.smAndUp"
      mini-variant-width="91"
      app
    >
      <v-list>
        <v-list-item :href="'/trade'">
          <img v-if="$vuetify.breakpoint.smAndUp" class="logo" src="../static/logo.svg">
          <img v-else class="logo-full" src="../static/logo-full.svg">
        </v-list-item>
        <v-list-item
          class="drawer-item"
          :id="`item-${item.title}`"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
        >
          <v-list-item-action class="drawer-icon-container">
            <div class="svg-container">
              <component class="drawer-icon" :id="item.title" :is="`icon${item.title}`"/>
            </div>
            <v-list-item-title class="drawer-icon-text" v-if="$vuetify.breakpoint.smAndUp" v-text="item.title"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="drawer-icon-full-text" v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="app-bar"
      tile
      clipped-left
      flat
      app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <img class="search-icon" src="../static/search.svg">
      <v-text-field
        class="search"
        label="Search for trader, trading instrument, news"
        solo
        flat
        full-width
        :outlined="false"
      ></v-text-field>

      <LanguagesSelector />

      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <nuxt/>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      :fixed="fixed"
      app
    >
      Footer
    </v-footer>

  </v-app>
</template>

<script>
  import iconTrade from '~/assets/icons/iconTrade.vue'
  import iconCopy from '~/assets/icons/iconCopy.vue'
  import iconAnalytics from '~/assets/icons/iconAnalytics.vue'
  import iconProfile from '~/assets/icons/iconProfile.vue'
  import iconFinance from '~/assets/icons/iconFinance.vue'
  import iconMetatrader from '~/assets/icons/iconMetatrader.vue'
  import iconAffiliate from '~/assets/icons/iconAffiliate.vue'
  import LanguagesSelector from '~/components/LanguagesSelector.vue'

  export default {
    components: {
      iconTrade, iconCopy, iconAnalytics, iconProfile, iconFinance, iconMetatrader, iconAffiliate,
      LanguagesSelector
    },
    data() {
      return {
        clipped: true,
        drawer: true,
        fixed: true,
        items: [
          {
            title: 'Trade',
            to: '/trade'
          },
          {
            title: 'Copy',
            to: '/copy'
          },
          {
            title: 'Analytics',
            to: '/analytics'
          },
          {
            title: 'Profile',
            to: '/profile'
          },
          {
            title: 'Finance',
            to: '/finance'
          },
          {
            title: 'Metatrader',
            to: '/metatrader'
          },
          {
            title: 'Affiliate',
            to: '/affiliate'
          },
        ],
        right: true,
        rightDrawer: false,
      }
    },
  }
</script>

<style scoped>
  .app {
    background-color: #f0f0f0;
  }

  .app-bar {
    background-color: #ffffff !important;
  }

  .logo {
    height: 40px;
    padding: 0 10px 0 10px;
    margin: 0 0 15px 0;
  }

  .logo-full {
    height: 30px;
  }

  .search {
    margin: 30px 0 0 0;
  }

  @media (min-width: 600px) {
    .search-icon {
      padding: 3px 10px 0 60px
    }
  }

  .drawer-item {
    border-top: 1px solid #e4e4e4;
    height: 65px;
  }

  @media (max-width: 600px) {
    #item-Affiliate {
      border-bottom: 1px solid #e4e4e4;
    }
  }

  @media (min-width: 600px) {
    #item-Affiliate {
      border-top: 1px solid #e4e4e4;
    }

    #item-Copy, #item-Analytics, #item-Profile, #item-Finance, #item-Metatrader {
      border-top: 0;
    }
  }

  .drawer-icon-container {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .svg-container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .drawer-icon {
    margin: 0 auto;
    display: block;
    fill: #8e9aac;
    width: 100%;
  }

  .drawer-icon-text {
    text-transform: uppercase;
    font-size: 0.65em;
    color: #8e9aac;
    line-height: 1em;
    margin: 5px 0 -10px 0;
  }

  .drawer-icon-full-text {
    font-size: 1.2em;
    color: #8e9aac;
  }

  .v-list-item--active .v-list-item__title {
    color: #000000;
  }

  .v-list-item--active .drawer-icon {
    fill: #3498DB;
  }

  #Trade {
    height: 20px;
  }

  #Copy {
    height: 28px;
  }

  #Analytics {
    height: 20px;
  }

  #Profile {
    height: 20px;
  }

  #Finance {
    height: 23px;
  }

  #Metatrader {
    height: 18px;
  }

  #Affiliate {
    height: 18px;
  }
</style>
