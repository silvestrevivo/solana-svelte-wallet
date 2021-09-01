import Unlock from '$screens/Unlock.svelte';
import Dashboard from '$screens/Dashboard.svelte';
import Transactions from '$screens/Transactions.svelte';
import CreateOrRecover from '$screens/CreateOrRecover.svelte';
import PrivateKey from '$screens/PrivateKey.svelte';
import Password from '$screens/Password.svelte';

export const screens = {
  unlock: {
    component: Unlock,
    class: 'unblock-container',
    screenOrder: 1,
  },
  createorrecover: {
    component: CreateOrRecover,
    class: 'createorrecover-container',
    screenOrder: 1,
  },
  privatekey: {
    component: PrivateKey,
    class: 'privatekey-container',
    screenOrder: 2,
  },
  password: {
    component: Password,
    class: 'password-container',
    screenOrder: 3,
  },
  dashboard: {
    component: Dashboard,
    class: 'dashboard-container',
    screenOrder: 4,
  },
  transactions: {
    component: Transactions,
    class: 'transactions-container',
    screenOrder: 5,
  },
};
