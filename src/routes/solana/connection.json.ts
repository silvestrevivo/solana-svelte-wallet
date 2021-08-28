import { Connection } from '@solana/web3.js';
import os from 'os';
import fs from 'mz/fs';
import path from 'path';
import yaml from 'yaml';
import type { connection } from '$types/types';

async function getConfig(): Promise<connection> {
  // Path to Solana CLI config file
  const CONFIG_FILE_PATH = path.resolve(
    os.homedir(),
    '.config',
    'solana',
    'cli',
    'config.yml',
  );
  const configYml = await fs.readFile(CONFIG_FILE_PATH, { encoding: 'utf8' });
  return yaml.parse(configYml);
}

async function getRpcUrl(): Promise<string> {
  try {
    const config = await getConfig();
    if (!config.json_rpc_url) throw new Error('Missing RPC URL');
    return config.json_rpc_url;
  } catch (err) {
    console.warn(
      'Failed to read RPC url from CLI config file, falling back to localhost',
    );
    return 'http://localhost:8899';
  }
}

export async function get(): Promise<{
  body: {
    rpcUrl: unknown;
    version: unknown;
  };
}> {
  try {
    const rpcUrl = await getRpcUrl();
    const connection = new Connection(rpcUrl, 'confirmed');
    const version = await connection.getVersion();
    return {
      body: {
        rpcUrl,
        version,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
