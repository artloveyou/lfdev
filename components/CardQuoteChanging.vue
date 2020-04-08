<template>
  <v-row class="pa-0 ma-0">
    <v-col class="pa-0 ma-0">
      <h1 class="card-text">
        {{ quote }}
      </h1>
      <div class="card-description">Quote</div>
    </v-col>
    <v-col class="pa-0 ma-0">
      <h1 class="card-text" :class="colorize">
        {{ changing }}%
      </h1>
      <div class="card-description">Changing</div>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    props: ['quote', 'changing'],
    computed: {
      colorize: function () {
        return this.changing < 0 ? 'card-red' : 'card-green'
      }
    }
  }
</script>
