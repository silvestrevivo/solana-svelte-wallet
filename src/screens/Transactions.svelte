<script lang="ts">
  import { globalStore } from '$stores/global';
  import type { SelectedScreenT } from '$types/types';
  import Screen from '$lib/Screen.svelte';
  import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

  export let screenObj: SelectedScreenT;

  let transactionsList = [];

  function goToDashboard() {
    $globalStore.currentScreen = 'dashboard';
    $globalStore.prevScreen = screenObj.screenOrder;
  }

  async function getTransactions() {
    const connection = new Connection(
      'https://api.devnet.solana.com',
      'confirmed',
    );
    const publicKey = new PublicKey($globalStore.keypair.address);
    const balance = await connection.getBalance(publicKey);
    const transactions = await connection.getSignaturesForAddress(publicKey);
    transactionsList = transactionsList.concat(transactions);
  }

  getTransactions();
</script>

<Screen currScreenObj={screenObj}>
  <div class="wrapper-transactions">
    {#if transactionsList.length > 0}
      <ul>
        {#each transactionsList as { blockTime, confirmationStatus, slot, signature }}
          <li>
            <span>Status: {confirmationStatus}</span>
            <span>BlockTime: {blockTime}</span>
            <span>Slot: {slot}</span>
            <span
              ><a
                href={`https://explorer.solana.com/tx/${signature}?cluster=devnet`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Transaction
              </a></span
            >
          </li>
        {/each}
      </ul>
    {:else}
      <h2>no transactions yet</h2>
    {/if}
    <p on:click={goToDashboard} class="go-to-dashboard-button">
      go to dashboard
    </p>
  </div>
</Screen>

<style lang="scss">
  .wrapper-transactions {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;

    h2 {
      color: var(--white);
      text-align: center;
    }

    ul {
      overflow-y: scroll;
      overflow-x: hidden;
      margin-bottom: 10px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--gray);
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 7px;

        a {
          color: var(--white);
          text-decoration: none;
          &:hover {
            color: var(--green);
            text-decoration: underline;
          }
        }
        /* color: var(--white); */
      }
    }
    .go-to-dashboard-button {
      display: inline-block;
      color: var(--white);
      cursor: pointer;
      text-align: center;
      font-size: 14px;
      &:hover {
        color: var(--green);
      }
    }
  }
</style>
