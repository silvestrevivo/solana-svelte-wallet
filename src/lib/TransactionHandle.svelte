<script lang="ts">
  import Button from './Button.svelte';
  import { fade, fly } from 'svelte/transition';
  import Input from './Input.svelte';
  import { globalStore } from '$stores/global';
  import {
    Connection,
    PublicKey,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
  } from '@solana/web3.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let selectStatus = 'send',
    value: string,
    transactionSended = false,
    address = undefined,
    recipient = '',
    error = false;

  function copyToClipboard() {
    navigator.clipboard.writeText(address.textContent);
  }

  function select(params: string) {
    selectStatus = params;
  }

  async function sendTransaction() {
    const connection = new Connection(
      'https://api.devnet.solana.com',
      'confirmed',
    );

    const fromPubkey = new PublicKey($globalStore.keypair.address as string);
    const toPubkey = new PublicKey(recipient as string);
    const secretKey = Uint8Array.from(
      JSON.parse($globalStore.keypair.secret as string),
    );
    const lamports = +value * 1000000000;
    const instructions = SystemProgram.transfer({
      fromPubkey,
      toPubkey,
      lamports,
    });
    const signers = [{ publicKey: fromPubkey, secretKey }];
    const transaction = new Transaction().add(instructions);
    const hash = await sendAndConfirmTransaction(
      connection,
      transaction,
      signers,
    );

    if (hash) {
      transactionSended = true;
      value = '';
      recipient = '';
      dispatch('updateBalance');
      setTimeout(() => {
        transactionSended = false;
      }, 2000);
    } else {
      error = true;
    }
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
        <Input type="number" bind:value placeholder="SOL" {error} />
        <Input bind:value={recipient} placeholder="recipient address" {error} />
        {#if transactionSended}
          <div
            class="confirm-transaction"
            in:fly={{ duration: 200, y: -50 }}
            out:fly={{ duration: 200, x: -100 }}
          >
            <span>transaction sended</span>
            <a href="https://solana.com" target="_blank">{recipient}</a>
          </div>
        {/if}

        <Button on:click={sendTransaction}>Send transaction</Button>
      </div>
    {:else}
      <div class="receive" in:fade={{ duration: 200 }}>
        <p>wallet address</p>
        <p bind:this={address} on:click={copyToClipboard} class="copy-address">
          {$globalStore.keypair.address}
        </p>
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
      padding-top: 10px;
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

        .copy-address {
          cursor: pointer;
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
