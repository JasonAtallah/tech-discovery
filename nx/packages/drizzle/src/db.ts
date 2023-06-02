import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import { neonConfig, Pool } from '@neondatabase/serverless';
import * as schema from './schema';

neonConfig.webSocketConstructor = ws;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });

// import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';

// const client = postgres(process.env.DATABASE_URL, { ssl: true });
// export const db: PostgresJsDatabase = drizzle(client);
