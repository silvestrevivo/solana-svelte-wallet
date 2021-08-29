<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Input from '$lib/Input.svelte';
  import Logo from '$lib/Logo.svelte';

  let value = '';

  function submit() {
    ////
  }
</script>

<main>
  <h1>Solana Wallet</h1>
  <div class="wrapper">
    <Logo />
    <div class="wrapper-content">
      <h2>Unblock the wallet</h2>
      <Input type="password" bind:value />
      <Button on:click={submit}>submit</Button>
    </div>
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
      box-shadow: 0px 0px 26px -4px #17645ecc;

      :global(svg) {
        height: 100%;
        max-height: 290px;
        margin: 0 auto;
        display: flex;
      }

      .wrapper-content {
        padding: 15px;

        h2 {
          text-align: center;
          color: #17645ecc;
          margin-bottom: 5px;
        }
      }
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
