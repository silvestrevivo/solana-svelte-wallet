import { writable } from 'svelte/store';
import type { GlobalStoreT } from '$types/types';

export const globalStore = writable<GlobalStoreT>({
  currentScreen: '',
  prevScreen: 0,
  // wallet content
  action: null,
  keypair: undefined,
  chainNet: 'https://api.devnet.solana.com',
});
