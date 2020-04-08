<template>
  <div class="star d-flex justify-end">

    <span v-if="favorite === true" class="star-favorite">
    <svg viewBox="0 0 30 30">
      <path
        d="M15 7l2.116 5.088 5.492.44-4.184 3.584 1.278 5.36L15 18.6l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L15 7z"></path>
    </svg>
    </span>

    <span v-else class="star-empty">
    <svg viewBox="0 0 30 30">
      <path
        d="M25 12.744l-7.191-.617L15 5.5l-2.809 6.627L5 12.744l5.455 4.727L8.82 24.5 15 20.772l6.18 3.728-1.635-7.029L25 12.744zm-10 6.152l-3.763 2.27.996-4.281-3.323-2.878 4.38-.376L15 9.595l1.71 4.036 4.38.376-3.322 2.878.996 4.281L15 18.896z"></path>
    </svg>
    </span>

  </div>
</template>
<script>
  export default {
    props: ['favorite'],
    data(){
      return {

      }
    }
  }
</script>


