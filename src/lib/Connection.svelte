<script lang="ts">
  import { Connection } from '@solana/web3.js';
  // import { getRpcUrl } from '$utils/helpers';
  import type { ConnectionT } from '$types/types';

  let connectionData: ConnectionT;

  async function getConnection() {
    // const rpcUrl = await getRpcUrl();
    const rpcUrl = 'https://api.devnet.solana.com';
    const connection = new Connection(rpcUrl, 'confirmed');
    const version = await connection.getVersion();
    connectionData = {
      rpcUrl,
      version: version?.['solana-core'],
    };
  }

  getConnection();

  $: active = connectionData && !!connectionData.version;
</script>

<div>
  <span class:active />
  <p class:active>{active ? connectionData.version : '-.-.-'}</p>
</div>

<style lang="scss">
  div {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    box-shadow: 0px 0px 26px -4px var(--green);
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: red;
      &.active {
        background-color: green;
      }
    }

    p {
      color: gray;
      &.active {
        color: var(--white);
      }
    }
  }
</style>
