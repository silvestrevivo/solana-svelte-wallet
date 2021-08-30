<script lang="ts">
  import { globalStore } from '$stores/global';

  $: active = !!$globalStore.connectionStatus.version;
</script>

<div>
  <span class:active />
  <p class:active>{active ? $globalStore.connectionStatus.version : '-.-.-'}</p>
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
