<script lang="ts">
  export let type: string = 'text',
    placeholder: string = '........',
    value: string,
    error = false;

  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<input use:typeAction {placeholder} bind:value class:error />

<style lang="scss">
  input {
    display: block;
    width: 100%;
    border: 2px solid var(--green);
    background-color: var(--black);
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    color: var(--green);
    &:focus {
      outline: none;
    }
    &.error {
      border-color: red;
    }
  }
</style>
