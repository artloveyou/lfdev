<template>


  <div class="list-item d-flex justify-start">

      <CardFavorite :favorite="favorite" />

      <CardFlags :category="category" :first="first" :second="second" />

  </div>



<!--  <v-col-->
<!--    cols="12"-->
<!--  >-->
<!--    <v-card>-->

<!--      <v-container class="pa-0 ma-0">-->

<!--        <v-row class="pa-0 ma-0">-->
<!--          <v-col class="pa-0 ma-0">-->
<!--            <CardFavorite :favorite="favorite" />-->
<!--            <CardFlags :category="category" :first="first" :second="second" />-->
<!--            <CardQuoteChanging :quote="quote" :changing="changing"/>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->

<!--      <v-container class="pa-0 ma-0">-->
<!--        <v-row class="pa-0 ma-0">-->
<!--          <v-col class="pa-0 ma-0 activate-settings">-->
<!--            <LineChart :labels="labels" :data="data" />-->
<!--            <div class="line-chart-settings-bottom"></div>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->

<!--      <v-divider></v-divider>-->

<!--      <v-container class="pa-0 ma-0">-->
<!--        <v-row class="pa-0 ma-0">-->
<!--          <v-col class="pa-0 ma-0 activate-settings">-->
<!--            <CardMarketVolatilitySpread :market="market" :direction="direction" :volatility="volatility" :spread="spread"/>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->

<!--      <v-divider></v-divider>-->

<!--      <v-container class="pa-0 ma-0">-->
<!--        <v-row class="pa-0 ma-0">-->
<!--          <v-col class="pa-0 ma-0 activate-settings">-->
<!--            <CardSellBuy :sell="sell" :buy="buy" :volume="volume"/>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->

<!--    </v-card>-->
<!--  </v-col>-->
</template>

<script>
  import CardFavorite from '~/components/CardFavorite.vue'
  import CardFlags from '~/components/CardFlags.vue'
  import CardQuoteChanging from '~/components/CardQuoteChanging'
  import LineChart from '~/components/LineChart.vue'
  import CardMarketVolatilitySpread from "~/components/CardMarketVolatilitySpread"
  import CardSellBuy from "~/components/CardSellBuy"

  export default {
    props: ['card'],
    components: {
      CardFavorite, CardFlags, CardQuoteChanging, LineChart,
      CardMarketVolatilitySpread, CardSellBuy
    },
    data() {
      return {
        favorite: this.card.favorite,
        category: this.card.category,
        first: this.card.first,
        second: this.card.second,
        quote: this.card.quote,
        changing: this.card.changing,
        labels: this.card.labels,
        data: this.card.data,
        market: this.card.market,
        direction: this.card.direction,
        volatility: this.card.volatility,
        spread: this.card.spread,
        sell: this.card.sell,
        buy: this.card.buy,
        volume: this.card.volume
      }
    }
  }
</script>

<style scoped>
.list-item {
  padding: 10px 0;
  border: 1px solid red;
  width: 100%;
}
</style>


