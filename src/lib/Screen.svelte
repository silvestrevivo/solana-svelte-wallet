<script lang="ts">
  import { globalStore } from '$stores/global';
  import { screens as screenOrders } from '$utils/screens';
  import type { SelectedScreenT } from '$types/types';

  export let currScreenObj: SelectedScreenT;

  function overflow(node, {}) {
    return {
      duration: 500,
      css: (t, u) => {
        let position;
        if (currScreenObj.screenOrder === $globalStore.prevScreen) {
          position =
            currScreenObj.screenOrder >
            screenOrders[$globalStore.currentScreen].screenOrder
              ? 'top'
              : 'bottom';
        } else {
          position =
            currScreenObj.screenOrder > $globalStore.prevScreen
              ? 'top'
              : 'bottom';
        }
        return `
                  ${
                    position === 'top'
                      ? 'clip-path: inset(0% 0% 0% ' + u * 110 + '%);'
                      : 'clip-path: inset(0% ' + u * 110 + '% 0% 0%);'
                  } position: absolute; top: 0; left: 0; z-index: 999;
                  `;
      },
    };
  }
</script>

<div class="screen-outer" in:overflow out:overflow>
  <div class={`${currScreenObj.class} screen`}>
    <slot />
  </div>
</div>

<style>
  .screen-outer {
    width: 100%;
    height: 100%;
  }
  .screen {
    width: 100%;
    height: 100%;
  }
</style>
