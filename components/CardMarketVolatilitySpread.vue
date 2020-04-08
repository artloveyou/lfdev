<template>
  <v-row class="pa-0 ma-0 card-section">
    <v-col class="pa-0 ma-0">
      <h2 class="card-text market" :class="colorize">
        {{ market }}%
          <div class="triangle arrow" :class="changeDirection"></div>
      </h2>
      <div class="card-description">Market Sentiment</div>
    </v-col>
    <v-col class="pa-0 ma-0">
      <h2 class="card-text">
        {{ volatility }}
      </h2>
      <div class="card-description">Volatility</div>
    </v-col>
    <v-col class="pa-0 ma-0">
      <h2 class="card-text">
        {{ volatility }}
      </h2>
      <div class="card-description">Spread</div>
    </v-col>
  </v-row>
</template>

<script>
    export default {
      props: ['market', 'direction', 'volatility', 'spread'],

      computed: {
        colorize: function () {
          return this.direction === 'down' ? 'card-red' : 'card-green'
        },
        changeDirection: function () {
          return this.direction === 'up' ? 'up' : 'down'
        }
      }
    }
</script>

<style scoped>
  .triangle{
    display: inline-block;
  }
  .arrow{
    position: absolute;
    top: 25px;
    margin: 0 0 0 5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  .up{
    border-bottom: 8px solid #47BF6F;
  }
  .down{
    border-top: 8px solid #ff4b5f;
  }
</style>
