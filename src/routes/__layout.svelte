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

  export let connection;
  console.log('Connection to cluster established:', connection);
</script>

<slot />

<style>
  :global(body) {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
</style>
