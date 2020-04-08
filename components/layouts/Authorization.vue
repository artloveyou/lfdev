<template>
  <div class="authorization">
    <div class="auth-title">
      Demo mode
    </div>

    <div class="links">
      <AuthSignInDialog />
      <AuthRegistrationDialog />
    </div>

  </div>
</template>

<script>
  import AuthSignInDialog from '~/components/layouts/AuthSignInDialog.vue'
  import AuthRegistrationDialog from '~/components/layouts/AuthRegistrationDialog.vue'

  export default {
    components: {
      AuthSignInDialog,
      AuthRegistrationDialog
    }
  }
</script>

<style scoped>
  .authorization {
    border-left: 1px solid #e4e4e4;
    border-right: 1px solid #e4e4e4;
    position: relative;
    width: 300px;
    padding: 4px 0 0 20px;
    height: 65px
  }

  .auth-title {
    position: absolute;
    top: 10px;
  }

  .links {
    cursor: pointer;
    color: #3498DB;
    position: absolute;
    top: 32px;
    font-size: 0.8em;
  }

  @media (max-width: 960px) {
    .authorization {
      height: 56px;
    }

    .auth-title {
      top: 8px;
    }

    .links {
      top: 28px
    }
  }

  @media (min-width: 1024px) {
    .authorization {
      width: 500px;
    }
  }
</style>
