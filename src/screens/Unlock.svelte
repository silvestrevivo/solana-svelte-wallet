<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Input from '$lib/Input.svelte';
  import Logo from '$lib/Logo.svelte';
  import Screen from '$lib/Screen.svelte';
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';

  export let screenObj: SelectedScreenT;

  let value = '',
    error = false;

  function submit() {
    let { password } = JSON.parse(localStorage.getItem('wallet'));
    if (password === value) {
      $globalStore.currentScreen = 'dashboard';
      $globalStore.prevScreen = screenObj.screenOrder;
    } else {
      error = true;
    }
  }

  function checkError(value: string) {
    if (value === '') {
      error = false;
    }
  }

  $: checkError(value);
  $: disabled = value.length === 0;
</script>

<Screen currScreenObj={screenObj}>
  <Logo />
  <div class="wrapper-content">
    <h2>Unlock the wallet</h2>
    <Input
      type="password"
      bind:value
      placeholder="type your passworkd"
      {error}
    />
    <Button on:click={submit} {disabled}>submit</Button>
  </div>
</Screen>

<style lang="scss">
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
</style>
