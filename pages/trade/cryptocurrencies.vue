<template>



    <v-row>
      <v-col
        v-for="n in 10"
        :key="n"

        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-12 .col-sm-6 .col-md-8
        </v-card>
      </v-col>
    </v-row>



</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
