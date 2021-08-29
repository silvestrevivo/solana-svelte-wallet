<button on:click>
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
    cursor: pointer;
    &:hover {
      color: var(--white);
    }
  }
</style>
