<script lang="ts">
  import { globalStore } from '$stores/global';
  import '../app.scss';

  function initGlobalStore() {
    let firstScreeen = localStorage.getItem('wallet')
      ? 'unlock'
      : 'createorrecover';
    $globalStore.currentScreen = firstScreeen;
  }

  initGlobalStore();
</script>

<slot />
