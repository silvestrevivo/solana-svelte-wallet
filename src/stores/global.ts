import { writable } from 'svelte/store';

export const globalStore = writable({
  currentScreen: 'unblock',
  prevScreen: 0,
});
