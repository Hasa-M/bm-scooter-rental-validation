import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import * as schema from "@/lib/db/schema";

function createDrizzleClient(pool: Pool) {
  return drizzle(pool, { schema });
}

export type DatabaseClient = ReturnType<typeof createDrizzleClient>;

export type DatabaseConnection = {
  client: DatabaseClient;
  close: () => Promise<void>;
};

const databaseGlobal = globalThis as typeof globalThis & {
  adminDatabase?: DatabaseClient;
  adminPool?: Pool;
};

export function createDatabaseConnection(): DatabaseConnection {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) {
    throw new Error("Database is not configured: DATABASE_URL is missing");
  }

  const pool = new Pool({ connectionString });
  return {
    client: createDrizzleClient(pool),
    close: () => pool.end(),
  };
}

export function getDatabaseClient(): DatabaseClient {
  if (databaseGlobal.adminDatabase) return databaseGlobal.adminDatabase;

  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) {
    throw new Error("Database is not configured: DATABASE_URL is missing");
  }

  const pool = new Pool({ connectionString });
  const client = createDrizzleClient(pool);
  databaseGlobal.adminPool = pool;
  databaseGlobal.adminDatabase = client;
  return client;
}
