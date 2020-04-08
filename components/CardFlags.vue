<template>
  <div class="flags">
    <div class="flag-first">
      <component :is="firstFlag" class="flag flag-first"/>
    </div>
    <div class="flag-second">
      <component :is="secondFlag" class="flag flag-second"/>
    </div>
    <div class="flags-name">
      {{ first }}/{{ second }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['category', 'first', 'second'],
    data() {
      return {
        firstFlag: null,
        secondFlag: null
      }
    },
    computed: {
      loaderFirst() {
        return this.first
          ? () => import(`~/assets/flags/${this.category}/${this.first}`)
          : null
      },
      loaderSecond() {
        return this.second
          ? () => import(`~/assets/flags/${this.category}/${this.second}`)
          : null
      }
    },
    mounted() {
      this.loaderFirst()
        .then(() => {
        this.firstFlag = () => this.loaderFirst()
        })
        .catch(() => {
          // nothing or default
        }),
        this.loaderSecond()
          .then(() => {
            this.secondFlag = () => this.loaderSecond()
          })
          .catch(() => {
            // nothing or default
          })
    }
  }
</script>
