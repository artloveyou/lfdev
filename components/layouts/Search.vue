<template>
  <div class="search">
    <img class="search-icon" src="../../static/search.svg">
    <v-text-field
      label="Search for trader, trading instrument, news"
      solo
      flat
      full-width
      :outlined="false"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style>
  .search-icon {
    margin: 0 0 30px 0;
  }
  .search {
    width: 100%;
    margin: 30px 0 0 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
  }
  @media (max-width: 600px) {
    .search {
      margin: 30px 0 0 0px;
    }
  }
</style>
