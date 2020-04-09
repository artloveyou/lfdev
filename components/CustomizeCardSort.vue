<template>
  <v-dialog
    v-model="dialog"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        icon
      >
        <iconSort
          class="icon icon-sort"
        />
      </v-btn>
    </template>

    <v-card
      class="mx-auto period-list"
      max-width="100%"
      tile
    >
      <v-container>
        <v-list>
          <v-row class="card-settings">
            <v-col>
              <Header class="card-header" :header="header"/>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-btn
                icon
                @click="dialog = false"
              >
                <iconCross
                  class="icon icon-cross"
                />
              </v-btn>
            </v-col>
          </v-row>

          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              class="list-item"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div
          @click="dialog = false"
          class="apply btn default flex-center"
        >
          <div class="btn-text">
            APPLY
          </div>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  import iconSort from '~/assets/icons/iconSort.vue'
  import iconCross from '~/assets/icons/iconCross.vue'
  import Header from '~/components/Header.vue'

  export default {
    components: {
      Header,
      iconSort, iconCross
    },
    data() {
      return {
        header: 'Sort',
        dialog: false,
        item: 0,

        // list: ['Name', 'Popularity', 'Volatility', 'Growth', 'Decline'],

        items: [
          {text: 'Name'},
          {text: 'Popularity'},
          {text: 'Volatility'},
          {text: 'Growth'},
          {text: 'Decline'}
        ],
      }
    }
  }
</script>

<style>
  .icon-sort {
    height: 12px;
  }
  .apply {
    margin: 15px 0 0 0;
  }
  .period-list {
    padding-bottom: 15px;
  }
  .list-item {
    border-top: 1px solid #e4e4e4;
  }
</style>
