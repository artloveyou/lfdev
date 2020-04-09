<template>
  <Cards :data="mockup" />
</template>

<script>
  import Cards from '~/components/Cards.vue'
  import CurrenciesCards from '~/components/mockups/CurrenciesCards'

  export default {
    components: {
      Cards, CurrenciesCards
    },
    data() {
      return {
        mockup: CurrenciesCards,
      }
    }
  }
</script>
