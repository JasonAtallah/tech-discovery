import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';

const generateConfig = () => {
  dotenv.config();

  const connectionString = process.env.DRIZZLE_CONFIG_DB_URL;
  console.log('connectionString', connectionString);

  return {
    schema: './packages/drizzle/src/schema.ts',
    out: './packages/drizzle/drizzle-pull',
    connectionString,
  } satisfies Config;
};

export default generateConfig();
