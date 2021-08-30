import { writable } from 'svelte/store';

export const globalStore = writable({
  currentScreen: 'unlock',
  prevScreen: 0,
  connectionStatus: null,
});
