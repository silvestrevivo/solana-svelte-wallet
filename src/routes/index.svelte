<script lang="ts">
  import { globalStore } from '$stores/global';
  import { screens } from '$utils/screens';
  import type { SelectedScreenT } from '$types/types';

  let selectedScreen: SelectedScreenT;
  $: selectedScreen = screens[$globalStore.currentScreen];
  $: console.log('selectedScreen: ', selectedScreen);
</script>

<main>
  <h1>Solana Wallet</h1>
  <div class="wrapper">
    <svelte:component
      this={selectedScreen.component}
      screenObj={selectedScreen}
    />
  </div>
  <p>
    powered by <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>
  </p>
</main>

<style lang="scss">
  main {
    background: url('/static/img/background.jpg') no-repeat center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    h1 {
      text-align: center;
      margin: 10px 0;
      color: white;
      font-size: 50px;
    }
    .wrapper {
      width: 90%;
      max-width: 450px;
      height: 90%;
      max-height: 450px;
      background-color: #272727;
      box-shadow: 0px 0px 26px -4px var(--green);
      position: relative;
    }
    p {
      margin: 10px 0;
      color: white;
      font-size: 14px;
      a {
        text-decoration: none;
        font-weight: bold;
        color: rgb(180, 4, 4);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
