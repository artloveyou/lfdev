<template>

  <v-row>
      <Card
        v-for="(card, i) in mockup.cards"
        :key="i"
        :card="card"
      />
  </v-row>

</template>

<script>
  import CurrenciesCards from '~/components/mockups/CurrenciesCards'
  import Card from '~/components/Card.vue'

  export default {
    components: {
      CurrenciesCards, Card
    },
    data() {
      return {
        mockup: CurrenciesCards,
      }
    }
  }
</script>
