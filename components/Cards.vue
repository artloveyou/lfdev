<template>
  <v-row>

    <Card
      v-if="($store.state.cardsList === false)"
      v-for="(card, i) in mockup.cards"
      :key="i"
      :card="card"
    />

    <CardList
      v-if="($store.state.cardsList === true)"
      v-for="(card, i) in mockup.cards"
      :key="i"
      :card="card"
    />

  </v-row>
</template>

<script>
  import Card from '~/components/Card.vue'
  import CardList from '~/components/CardList.vue'

  export default {
    props: ['data'],
    components: {
      Card, CardList
    },
    data() {
      return {
        mockup: this.data,
      }
    }
  }
</script>

<style scoped>

</style>
