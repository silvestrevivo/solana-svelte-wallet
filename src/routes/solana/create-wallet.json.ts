import { Keypair } from '@solana/web3.js';

export async function get(): Promise<{
  body: {
    address: string;
    secret: string;
  };
}> {
  /**
   * Establish a connection to the cluster
   */
  try {
    const keypair = Keypair.generate();
    const address = keypair?.publicKey.toString();
    const secret = JSON.stringify(Array.from(keypair.secretKey));
    return {
      body: {
        address,
        secret,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
