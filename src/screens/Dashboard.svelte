<script lang="ts">
  import Screen from '$lib/Screen.svelte';
  import TransactionHandle from '$lib/TransactionHandle.svelte';
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';

  export let screenObj: SelectedScreenT;

  function back() {
    $globalStore.currentScreen = 'unlock';
    $globalStore.prevScreen = screenObj.screenOrder;
  }
</script>

<Screen currScreenObj={screenObj}>
  <div class="wrapper-price">
    <p class="price-fiat">$250,35</p>
    <p class="price-sol">SOL 2.35</p>
  </div>
  <TransactionHandle />
</Screen>

<style lang="scss">
  :global(.dashboard-container) {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  .wrapper-price {
    text-align: center;
    padding: 10px 0;
    .price-fiat {
      color: var(--white);
      font-size: 72px;
      text-shadow: 0px 0px 20px var(--green);
    }
    .price-sol {
      font-size: 32px;
      margin-top: 10px;
      color: gray;
    }
  }
</style>
