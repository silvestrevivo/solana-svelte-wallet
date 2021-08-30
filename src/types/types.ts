import type { SvelteComponent } from 'svelte/internal';
export interface connection {
  json_rpc_url: string;
  websocket_url: string;
  keypair_path: string;
  address_labels: { '11111111111111111111111111111111': string };
  commitment: string;
}

export interface SelectedScreenT {
  component: typeof SvelteComponent;
  class: string;
  screenOrder: number;
}
