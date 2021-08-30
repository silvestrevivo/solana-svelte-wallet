import Unblock from '$screens/Unblock.svelte';
import Dashboard from '$screens/Dashboard.svelte';
import Transactions from '$screens/Transactions.svelte';

export const screens = {
  unblock: {
    component: Unblock,
    class: 'unblock-container',
    screenOrder: 1,
  },
  dashboard: {
    component: Dashboard,
    class: 'dashboard-container',
    screenOrder: 2,
  },
  transactions: {
    component: Transactions,
    class: 'transactions-container',
    screenOrder: 3,
  },
};
