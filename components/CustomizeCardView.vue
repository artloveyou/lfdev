<template>
  <div class="text-center">
    <v-dialog
      style="background-color: rgb(33,1,0);"
      v-model="dialog"
      width="370"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          icon
        >
          <iconSettings
            class="icon"
          />
        </v-btn>
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
                @click="dialog = false"
              >
                <iconCross
                  class="icon icon-cross"
                />
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pa-0 ma-0">

          <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0">
              <CardFavorite :favorite="favorite" />
              <CardFlags :category="category" :first="first" :second="second" />
              <CardQuoteChanging :quote="quote" :changing="changing"/>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pa-0 ma-0">
          <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0 activate-settings">
              <CustomizeCardViewActivate />
              <LineChart :labels="labels" :data="data" />
              <div class="line-chart-settings-bottom"></div>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pa-0 ma-0">
          <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0 activate-settings">
              <CustomizeCardViewActivate />
              <CardMarketVolatilitySpread :market="market" :direction="direction" :volatility="volatility" :spread="spread"/>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container class="pa-0 ma-0">
          <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0 activate-settings">
              <CustomizeCardViewActivate />
              <CardSellBuy :sell="sell" :buy="buy" :volume="volume"/>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container>
          <v-row class="card-settings">
            <v-col>
              <v-btn
                large
                width="100%"
                color="primary"
                @click="dialog = false"
              >
                Apply
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import Header from "~/components/Header.vue"
  import iconSettings from '~/assets/icons/iconSettings.vue'
  import iconCross from '~/assets/icons/iconCross.vue'
  import CardFavorite from '~/components/CardFavorite.vue'
  import CardFlags from '~/components/CardFlags.vue'
  import CardQuoteChanging from '~/components/CardQuoteChanging'
  import LineChart from '~/components/LineChart.vue'
  import CardMarketVolatilitySpread from "~/components/CardMarketVolatilitySpread"
  import CardSellBuy from "~/components/CardSellBuy"
  import CustomizeCardViewActivate from "~/components/CustomizeCardViewActivate"

  export default {
    components: {
      Header,
      iconSettings, iconCross,
      CardFavorite, CardFlags, CardQuoteChanging, LineChart, CustomizeCardViewActivate,
      CardMarketVolatilitySpread, CardSellBuy
    },
    data() {
      return {
        header: 'Customize card view',
        dialog: false,

        // Card
        favorite: true,
        category: 'currencies',
        first: 'EUR',
        second: 'USD',
        quote: 1.12345,
        changing: -1.23,
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        data: [1.12330,1.12332,1.12337,1.12344,1.12350,1.12340,1.12345],
        market: 50,
        direction: 'up',
        volatility: 10,
        spread: 5,
        sell: 1.12340,
        buy: 1.12345,
        volume: 1.00
      }
    }

  }
</script>

<style>
  .card-settings {
    padding: 0 10px;
  }

  .icon-cross {
    height: 20px;
  }

  .activate-settings {
    position: relative;
  }

  .line-chart-settings-bottom {
    height: 40px;
    background-color: #DCF0FB;
  }
</style>
