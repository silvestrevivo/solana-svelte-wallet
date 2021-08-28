<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  let visible = false;

  setTimeout(() => {
    visible = true;
  }, 200);
</script>

<main>
  {#if visible}
    <div transition:fly={{ duration: 1000, y: -200 }}>
      <h1 transition:fade>Solana Wallet</h1>
      <img
        transition:fade
        src="/static/img/solana-logo.png"
        alt="solana logo"
      />
    </div>
  {/if}
</main>

<style lang="scss">
  main {
    background: url('/static/img/solana-background.png') no-repeat center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
      color: white;
      font-size: 50px;
    }
  }

  img {
    height: 300px;
    width: 300px;
  }
</style>
