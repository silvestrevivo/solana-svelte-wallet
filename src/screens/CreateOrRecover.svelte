<script lang="ts">
  import Screen from '$lib/Screen.svelte';
  import Button from '$lib/Button.svelte';
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';
  import Logo from '$lib/Logo.svelte';
  import { Keypair } from '@solana/web3.js';

  export let screenObj: SelectedScreenT;

  async function step(action: string) {
    $globalStore.currentScreen = 'password';
    $globalStore.prevScreen = screenObj.screenOrder;
    $globalStore.action = action;
    // create keypair
    const keypair = Keypair.generate();
    const address = keypair?.publicKey.toString();
    const secret = JSON.stringify(Array.from(keypair.secretKey));

    if (address && secret) {
      $globalStore.keypair = { address, secret };
      if (window && window.localStorage) {
        localStorage.setItem('wallet', JSON.stringify({ address, secret }));
      }
    }
  }
</script>

<Screen currScreenObj={screenObj}>
  <div class="wrapper-create">
    <Logo />
    <div class="wrapper-buttons">
      <Button on:click={() => step('create')}>Create Wallet</Button>
      <!-- <Button on:click={() => step('recover')}>Recover with PrivateKey</Button> -->
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
