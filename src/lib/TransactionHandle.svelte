<script lang="ts">
  import Button from './Button.svelte';
  import { fade, fly } from 'svelte/transition';
  import Input from './Input.svelte';

  let selectStatus = 'send',
    value: string,
    transactionSended = false;

  function select(params: string) {
    selectStatus = params;
  }

  function sendTransaction() {
    transactionSended = true;
    value = '';
  }
</script>

<div class="wrapper-transacion">
  <div class="selectors">
    <Button on:click={() => select('send')} active={selectStatus === 'send'}
      >Send</Button
    >
    <Button
      on:click={() => select('receive')}
      active={selectStatus === 'receive'}>Receive</Button
    >
  </div>
  <div class="action">
    {#if selectStatus === 'send'}
      <div class="send" in:fade={{ duration: 200 }}>
        <Input type="number" bind:value placeholder="SOL" />
        {#if transactionSended}
          <div class="confirm-transaction" in:fly={{ duration: 200, y: -50 }}>
            <span>transaction sended</span>
            <a href="https://solana.com" target="_blank"
              >dkjfdsfdjfhjsdhfsjfsjhfjshjsdhfjsh</a
            >
          </div>
        {/if}

        <Button on:click={sendTransaction}>Send transaction</Button>
      </div>
    {:else}
      <div class="receive" in:fade={{ duration: 200 }}>
        <p>wallet address</p>
        <p>fjhdsjfhhdfjhds374857hdjfhdwh847</p>
        <span>copy to receive transaction</span>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .wrapper-transacion {
    flex: 1;
    display: flex;
    flex-direction: column;
    .selectors {
      display: flex;
      gap: 10px;
      padding-top: 20px;
    }
    .action {
      margin: 20px 0;
      flex: 1;
      .receive {
        background-color: var(--black);
        border-radius: 10px;
        height: 100%;
        color: var(--white);
        padding: 10px;
        text-align: center;
        font-weight: lighter;
        p {
          margin: 15px 0;
        }
        span {
          display: inline-block;
          color: grey;
          margin-top: 30px;
          font-size: 14px;
        }
      }
      .send {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .confirm-transaction {
          text-align: center;
          color: var(--white);
          font-weight: lighter;
          font-size: 14px;
          a {
            color: gray;
          }
        }
      }
    }
  }
</style>
