import Unlock from '$screens/Unlock.svelte';
import Dashboard from '$screens/Dashboard.svelte';
import Transactions from '$screens/Transactions.svelte';

export const screens = {
  unlock: {
    component: Unlock,
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
