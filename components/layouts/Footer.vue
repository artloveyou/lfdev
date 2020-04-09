<template>
  <div class="footer">
    <div class="footer-item">
      <div class="money">0.00 USD</div>
      <div class="description">ASSETS, TOTAL</div>
    </div>
    <div class="footer-item mob">
      <div class="money">0.00 USD</div>
      <div class="description">ASSETS USED</div>
    </div>
    <div class="footer-item mob">
      <div class="money">0.00 USD</div>
      <div class="description">AVAILABLE FOR OPERATIONS</div>
    </div>
    <div style="width: 100%"></div>
    <div class="footer-item footer-right">
      <div class="money">0.00 USD</div>
      <div class="description">CURRENT CHANGE</div>
    </div>
    <div class="footer-item footer-right">
      <div
        class="btn deposit default flex-center"
      >
        <div class="btn-text">
          Deposit
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    padding-left: 50px;
  }

  .footer-item {

  }

  .footer-right {
    justify-content: flex-end;
  }

  .deposit {
    margin-right: 20px;
    padding: 0 20px;
  }

  .money {
    width: 150px;
  }

  .description {
    font-size: 0.6em;
  }
  @media (max-width: 760px) {
    .mob {
      display: none;
    }
  }
</style>
