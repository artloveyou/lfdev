<template>
  <div>
    <v-row class="header-wrapper">
      <v-col>
        <Header class="header" :header="header"/>
      </v-col>
      <v-col class="selects d-flex justify-end">

        <v-btn
          class="mobile-settings icon-dots"
          v-on:click="visible=!visible"
          icon>
          <iconDots
            class="icon"
          />
        </v-btn>

        <div
          class="mobile-settings mobile-settings-bar"
          v-show="visible"
        >
          <div class="mobile-search-close flex-center"
               v-on:click="visible=!visible">
            <iconCross
              class="icon icon-cross"
            />
          </div>

          <v-row class="mobile-wrapper">
            <v-col cols="1">
              <CustomizeCardPeriod />
            </v-col>
            <v-col cols="1">
              <CustomizeCardSort
                :label="sort.label"
                :list="sort.list"
                :listActive="sort.listActive"
                :width="sort.width"
              />
            </v-col>
            <v-col cols="1">
              <CustomizeCardView/>
            </v-col>
            <v-col cols="1">



              <v-btn
                @click="$store.commit('changeCardsView')"
                icon>
                <iconList
                  v-if="($store.state.cardsList === false)"
                  class="icon"
                />
                <iconTiles
                  v-if="($store.state.cardsList === true)"
                  class="icon"
                />
              </v-btn>


            </v-col>
          </v-row>

        </div>

          <Select
            class="full-settings"
            :label="sort.label"
            :list="sort.list"
            :listActive="sort.listActive"
            :width="sort.width"
          />
          <Select
            class="full-settings"
            :label="period.label"
            :list="period.list"
            :listActive="period.listActive"
            :width="period.width"
          />

          <CustomizeCardView
            v-if="($store.state.cardsList === false)"
            class="full-settings"/>

          <v-btn
            @click="$store.commit('changeCardsView')"
            class="full-settings"
            icon>
            <iconList
              v-if="($store.state.cardsList === false)"
              class="icon"
            />
            <iconTiles
              v-if="($store.state.cardsList === true)"
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
  import CustomizeCardPeriod from '~/components/CustomizeCardPeriod.vue'
  import CustomizeCardSort from '~/components/CustomizeCardSort.vue'
  import CustomizeCardView from '~/components/CustomizeCardView.vue'
  import iconList from '~/assets/icons/iconList.vue'
  import iconTiles from '~/assets/icons/iconTiles.vue'
  import iconDots from '~/assets/icons/iconDots.vue'
  import iconCross from '~/assets/icons/iconCross.vue'

  export default {
    components: {
      Header, Select,
      CustomizeCardPeriod, CustomizeCardSort, CustomizeCardView,
      iconList, iconTiles, iconDots, iconCross
    },
    head: {
      title: 'Trading',
    },
    data() {
      return {
        visible: false,

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
          // {
          //   title: 'Favorites',
          //   to: 'favorites'
          // },
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
  .full-settings {

  }

  .mobile-wrapper {
    padding-left: 20px;
  }
  .icon-dots {
    transform: scale(.7);
  }
  .mobile-settings {
    display: none;
    position: absolute;
  }
  .mobile-settings-bar{
    border-top: 1px solid #e4e4e4;
    background-color: #ffffff;
    width: 100%;
    height: 59px;
    top: 0;
    right: 0;
  }
  @media (max-width: 760px) {
    .mobile-settings {
      display: block;
    }
    .full-settings {
      display: none;
    }
  }

  .header-wrapper {
    height: 50px;
  }

  .header {
    margin: 5px 0 0 12px;
  }

  .theme--light.v-tabs > .v-tabs-bar .v-tab {
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
