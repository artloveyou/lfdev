<template>
  <div v-on:click="activate" class="activate" :class="background">
    <div class="activate-chip" :class="chip">
      <span class="activate-text">{{ status }}</span>
    </div>
  </div>
</template>

<script>
    export default {
       data() {
         return {
           status: 'activate',
           background: 'activate-off',
           chip: 'activate-chip-off'
         }
       },
      methods: {
        activate: function () {
          if (this.status === 'activate') {
            this.status = 'active'
            this.background = 'activate-on'
            this.chip = 'activate-chip-on'
          }else{
            this.status = 'activate'
            this.background = 'activate-off'
            this.chip = 'activate-chip-off'
          }
        }
      }
    }
</script>

<style scoped>
  .activate-text {
    text-transform: uppercase;
  }

  .activate {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .activate-on {
    background-color: rgba(231, 233, 236, 0);
  }
  .activate-off {
    background-color: rgba(231, 233, 236, 0.64);
  }

  .activate-chip {
    width: 120px;
    text-align: center;
    font-size: 0.65em;
    padding: 2px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 15px lightgrey;
  }
  .activate-chip-on {
    background-color: #ffffff;
    color: #3498DB;
  }
  .activate-chip-off {
    background-color: #3B4B68;
    color: #ffffff;
  }
</style>
