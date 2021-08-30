<script lang="ts">
  export let disabled = false,
    active = false;
</script>

<button on:click {disabled} class:enabled={!disabled} class:active>
  <slot>Click</slot>
</button>

<style lang="scss">
  button {
    padding: 10px;
    color: var(--dark);
    background-color: var(--green);
    border: none;
    border-radius: 5px;
    display: block;
    width: 100%;
    margin-top: 10px;
    cursor: not-allowed;
    &.active {
      color: var(--white);
    }
    &.enabled {
      cursor: pointer;
      &:hover {
        color: var(--white);
      }
    }
  }
</style>
