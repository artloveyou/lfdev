<template>
  <div>
    <v-row class="header-wrapper">
      <v-col>
        <Header class="header" :header="header"/>
      </v-col>
      <v-col class="selects d-flex justify-end">
        <Select
          :label="sort.label"
          :list="sort.list"
          :listActive="sort.listActive"
          :width="sort.width"
        />
        <Select
          :label="period.label"
          :list="period.list"
          :listActive="period.listActive"
          :width="period.width"
        />

        <CustomizeCardView/>

        <v-btn
          icon>
          <iconList
            class="icon"
          />
        </v-btn>
      </v-col>
    </v-row>

    <v-tabs
      background-color="#ffffff00"
      height="25"
    >
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        :to="`/trade/${item.to}`"
        router
        exact
      >{{item.title}}
      </v-tab>
    </v-tabs>

    <v-container
      fluid
    >
      <nuxt/>
    </v-container>

  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Select from '~/components/Select.vue'
  import CustomizeCardView from "../components/CustomizeCardView";
  import iconList from '~/assets/icons/iconList.vue'

  export default {
    components: {
      Header, Select, CustomizeCardView,
      iconList
    },
    head: {
      title: 'Trading',
    },
    data() {
      return {
        // Popup dialog
        customizeCardView: false,

        // Page props
        header: 'Trading tools',

        // Selects props
        sort: {
          label: 'SORT',
          list: ['Name', 'Popularity', 'Volatility', 'Growth', 'Decline'],
          listActive: 'Popularity',
          width: 110
        },
        period: {
          label: 'PERIOD',
          list: ['1d', '7d', '1m', '3m', '6m', '1y'],
          listActive: '1m',
          width: 70
        },

        // items
        items: [
          {
            title: 'Favorites',
            to: 'favorites'
          },
          {
            title: 'Currencies',
            to: 'currencies'
          },
          {
            title: 'Cryptocurrencies',
            to: 'cryptocurrencies'
          },
          {
            title: 'Metals',
            to: 'metals'
          },
          {
            title: 'Oil',
            to: 'oil'
          },
          {
            title: 'Shares',
            to: 'shares'
          },
          {
            title: 'Stock indexes',
            to: 'stock-indexes'
          },
        ]
      }
    }
  }
</script>

<style>
  .header-wrapper {
    height: 50px;
  }

  .header {
    margin: 5px 0 0 12px;
  }

  .v-tab {
    font-size: 0.8em;
    font-weight: 400;
    text-transform: none;
    padding: 0;
    margin: 0 15px 0 15px;
    min-width: 0px;
  }

  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
    color: #8e9aac;
  }
</style>
