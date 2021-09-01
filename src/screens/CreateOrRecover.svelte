<script lang="ts">
  import Screen from '$lib/Screen.svelte';
  import Button from '$lib/Button.svelte';
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';
  import Logo from '$lib/Logo.svelte';

  export let screenObj: SelectedScreenT;

  function step(action: string) {
    $globalStore.currentScreen = 'privatekey';
    $globalStore.prevScreen = screenObj.screenOrder;
    $globalStore.action = action;
  }
</script>

<Screen currScreenObj={screenObj}>
  <div class="wrapper-create">
    <Logo />
    <div class="wrapper-buttons">
      <Button on:click={() => step('create')}>Create Wallet</Button>
      <Button on:click={() => step('recover')}>Recover with PrivateKey</Button>
    </div>
  </div>
</Screen>

<style lang="scss">
  .wrapper-create {
    padding: 20px 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .wrapper-buttons {
      display: flex;
      gap: 10px;
    }
  }
</style>
