import { writable } from 'svelte/store';

export const globalStore = writable({
  //currentScreen: 'unlock',
  currentScreen: 'createorrecover',
  prevScreen: 0,
  // wallet content
  action: null,
  connectionStatus: null,
});
