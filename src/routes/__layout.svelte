<script lang="ts">
  import { globalStore } from '$stores/global';
  import '../app.scss';

  function initGlobalStore() {
    let wallet = localStorage.getItem('wallet');
    let firstScreeen = wallet ? 'unlock' : 'createorrecover';
    $globalStore.currentScreen = firstScreeen;

    if (wallet) {
      let { address, secret } = JSON.parse(wallet);
      $globalStore.keypair = { address, secret };
    }
  }

  initGlobalStore();
</script>

<slot />
