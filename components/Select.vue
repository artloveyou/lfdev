<template>

<div class="select-wrapper" :style="`width: ${width}px`">
  <v-select
    class="select"
    v-model="model"
    :items="items"
    :label="label"
    background-color="white"
    dense
  ></v-select>
</div>

</div>

</template>

<script>
    export default {
      name: "Select",
      props: ['label', 'list', 'listActive', 'width'],

      data () {
        return{
          items: this.list,
          model: this.listActive,
        }
      },
      watch: {
        multiple (val) {
          if (val) this.model = [this.model]
          else this.model = this.model[0] || this.listActive
        },
      }

    }
</script>

<style>
  .select-wrapper{
    margin: 0 18px 0 0;
  }
  .select-wrapper .v-text-field .v-label{
    color: #8e9aac;
    font-size: 0.8em;
    top: 3px !important;
  }
  .theme--light.v-select .v-select__selection--comma {
    font-size: 0.85em;
    color: #3498DB !important;
    padding: 0 0 0 10px;
  }
</style>
