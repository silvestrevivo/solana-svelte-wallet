<script lang="ts">
  import Screen from '$lib/Screen.svelte';
  import Button from '$lib/Button.svelte';
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';

  export let screenObj: SelectedScreenT,
    value = 'ewoi weoi eoir laskf we alskfj we qpeiur laksjf lak lfksd';

  function step() {
    $globalStore.currentScreen = 'password';
    $globalStore.prevScreen = screenObj.screenOrder;
  }
</script>

<Screen currScreenObj={screenObj}>
  <div class="wrapper-key">
    {#if $globalStore.action === 'create'}
      <p>copy this text down below and save it in a safe place</p>
      <textarea bind:value />
    {:else}
      <p>recover wallet</p>
    {/if}
    <Button on:click={step}>Next</Button>
  </div>
</Screen>

<style lang="scss">
  .wrapper-key {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    gap: 20px;
    p {
      color: var(--white);
      text-align: center;
    }
  }
  textarea {
    border: none;
    border-radius: 10px;
    background-color: var(--black);
    color: var(--white);
    padding: 40px 10px;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-align: center;
    line-height: 30px;
  }
</style>
