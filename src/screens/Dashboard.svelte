<script lang="ts">
  import Screen from '$lib/Screen.svelte';
  import TransactionHandle from '$lib/TransactionHandle.svelte';
  import { globalStore } from '$stores/global';
  import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
  import type { SelectedScreenT } from '$types/types';

  export let screenObj: SelectedScreenT;

  // function back() {
  //   $globalStore.currentScreen = 'unlock';
  //   $globalStore.prevScreen = screenObj.screenOrder;
  // }

  let lastBalance;
  let balanceInUSD;

  $: balanceInSol = +(lastBalance / 1000000000).toFixed(2);
  console.log('balanceInSol: ', balanceInSol);

  async function getBalance() {
    const connection = new Connection(
      'https://api.devnet.solana.com',
      'confirmed',
    );
    const publicKey = new PublicKey($globalStore.keypair.address);
    const balance = await connection.getBalance(publicKey);
    console.log('balance <= 1000000000: ', balance <= 1000000000);

    if (balance === undefined) {
      throw new Error('Account not funded');
    } else if (balance <= 1000000000) {
      const hash = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);
      await connection.confirmTransaction(hash);
      const balance = await connection.getBalance(publicKey);
      console.log('balance transaction: ', balance);
      lastBalance = balance;
    } else {
      lastBalance = balance;
    }

    const getBalanceInUSD = await getBalanceInUSDFromAPI();
    balanceInUSD = +(getBalanceInUSD * balanceInSol).toFixed(2);
  }

  async function getBalanceInUSDFromAPI() {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/solana',
    );
    const result = await response.json();
    console.log('result: ', result.market_data.current_price.usd);
    return result.market_data.current_price.usd;
  }

  getBalance();
</script>

<Screen currScreenObj={screenObj}>
  <div class="wallet-address">
    <p>{$globalStore.keypair.address}</p>
  </div>
  <div class="wrapper-price">
    {#if lastBalance !== undefined}
      <p class="price-fiat">$ {balanceInUSD}</p>
      <p class="price-sol">{balanceInSol} SOL</p>
    {/if}
  </div>
  <TransactionHandle on:updateBalance={getBalance} />
</Screen>

<style lang="scss">
  :global(.dashboard-container) {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  .wallet-address {
    text-align: center;
    color: var(--gray);
    cursor: pointer;
  }

  .wrapper-price {
    text-align: center;
    padding: 10px 0;
    .price-fiat {
      color: var(--white);
      font-size: 62px;
      text-shadow: 0px 0px 20px var(--green);
    }
    .price-sol {
      font-size: 28px;
      margin-top: 10px;
      color: var(--gray);
    }
  }
</style>
