<script lang="ts">
  import Input from '$lib/Input.svelte';
  import Button from '$lib/Button.svelte';
  import Screen from '$lib/Screen.svelte';
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';

  export let screenObj: SelectedScreenT,
    password = '',
    confirmPassword = '';

  function step() {
    $globalStore.currentScreen = 'dashboard';
    $globalStore.prevScreen = screenObj.screenOrder;

    let currentLocalStorage = JSON.parse(localStorage.getItem('wallet'));
    let updateObjectFromLocalStorage = { ...currentLocalStorage, password };
    localStorage.setItem(
      'wallet',
      JSON.stringify(updateObjectFromLocalStorage),
    );
  }

  $: inputFilled = password.length > 0 && confirmPassword.length > 0;
  $: disabled = !(password === confirmPassword && inputFilled);
</script>

<Screen currScreenObj={screenObj}>
  <div class="wrapper-password">
    <Input type="password" bind:value={password} placeholder="passworkd" />
    <Input
      type="password"
      bind:value={confirmPassword}
      placeholder="confirm passworkd"
    />
    <Button on:click={step} {disabled}>Next</Button>
  </div>
</Screen>

<style lang="scss">
  .wrapper-password {
    height: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 20px;
  }
</style>
