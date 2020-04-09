<template>
  <div class="search">
    <div
      class="mobile-search-enable"
      v-on:click="visible=!visible"></div>
    <img
      class="search-icon" src="../../static/search.svg">
    <v-text-field
      class="search-field"
      label="Search for trader, trading instrument, news"
      solo
      flat
      full-width
      :outlined="false"
    ></v-text-field>

    <div class="mobile-search"
         v-show="visible"
    >
      <img class="mobile-search-icon" src="../../static/search.svg">
      <v-text-field
        class="mobile-search-field"
        label="Search for trader, trading instrument, news"
        solo
        flat
        full-width
        :outlined="false"
      ></v-text-field>
      <div class="mobile-search-close flex-center"
           v-on:click="visible=!visible">
        <iconCross
          class="icon icon-cross"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import iconCross from '~/assets/icons/iconCross.vue'

  export default {
    components: {
      iconCross
    },
    data(){
      return{
        visible: false
      }
    }
  }
</script>

<style>
  .mobile-search-enable {
    margin-left: 50px;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 43%;
    z-index: 100;
  }
  @media (max-width: 600px) {
    .mobile-search-enable {
      display: block;
    }
  }
  .mobile-search {
    background-color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100%;
    z-index: 100;
  }
  .mobile-search-icon {
    margin: 17px 0 30px 15px;
  }
  .mobile-search-field {
    position: absolute;
    top: 0;
    left: 50px;
    width: 100%;
  }
  .mobile-search-close {
    background-color: #ffffff;
    position: absolute;
    height: 56px;
    width: 56px;
    top: 0;
    right: 0;
    z-index: 101;
  }
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
      width: 50%;
    }
    .search-field {
      display: none;
    }
  }
</style>
