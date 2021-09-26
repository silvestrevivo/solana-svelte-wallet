import { Connection } from '@solana/web3.js';
import { getRpcUrl } from './helpers';

export async function get(): Promise<{
  body: {
    rpcUrl: string;
    version: string;
  };
}> {
  /**
   * Establish a connection to the cluster
   */
  try {
    const rpcUrl = await getRpcUrl();
    const connection = new Connection(rpcUrl, 'confirmed');
    const version = await connection.getVersion();
    return {
      body: {
        rpcUrl,
        version: version?.['solana-core'],
      },
    };
  } catch (error) {
    console.error(error);
  }
}
