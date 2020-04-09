<template>
  <Cards :data="mockup" />
</template>

<script>
  import Cards from '~/components/Cards.vue'
  import CryptocurrenciesCards from '~/components/mockups/CryptocurrenciesCards'

  export default {
    components: {
      Cards, CryptocurrenciesCards
    },
    data() {
      return {
        mockup: CryptocurrenciesCards,
      }
    }
  }
</script>
