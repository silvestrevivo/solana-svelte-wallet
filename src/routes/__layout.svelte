<script context="module">
  export async function load({ fetch }) {
    const res = await fetch(`solana/connection.json`);

    return {
      props: {
        connection: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  import '../app.scss';
  import { globalStore } from '$stores/global';

  export let connection;

  console.log('Connection to cluster established:', connection);

  $: updateConnection(connection);

  function updateConnection(connection) {
    $globalStore.connectionStatus = connection;
  }
</script>

<slot />
