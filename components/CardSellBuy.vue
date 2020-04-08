<template>

  <v-row class="pa-0 ma-0">

    <v-col class="pa-0 ma-0">
      <div class="btn card-btn-red">
        <div class="btn-digit">
          {{ sell }}
        </div>
        <div class="btn-desc">
          SELL
        </div>
      </div>
    </v-col>

    <v-col class="pa-0 ma-0">
      <div class="volume">
        <div class="card-description volume-description">
          VOLUME
        </div>
        <div class="volume-value">
          {{ volume }}
        </div>
      </div>
    </v-col>

    <v-col class="pa-0 ma-0">
      <div class="btn card-btn-green">
        <div class="btn-digit">
        {{ buy }}
        </div>
        <div class="btn-desc">
          BUY
        </div>
      </div>
    </v-col>

  </v-row>

</template>

<script>
    export default {
        props: ['sell', 'buy', 'volume']
    }
</script>

<style scoped>
  .btn {
    padding: 4px 0;
    margin: 10px 0;
    text-align: center;
    border-radius: 4px;
  }
  .card-btn-red {
    margin-left: 10px;
  }
  .card-btn-green {
    margin-right: 10px;
  }
  .btn-desc {
    font-size: 0.8em;
  }
  .volume {
    text-align: center;
    margin: 10px 0;
  }
  .volume-description {
    padding: 0;
  }
  .volume-value {
    font-size: 0.8em;
    color: #8e9aac;
    border: 1px solid #8e9aac;;
    border-radius: 3px;
    padding: 3px 0;
    margin: 0 10px;
  }
</style>
