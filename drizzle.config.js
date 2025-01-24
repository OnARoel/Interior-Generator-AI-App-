import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_drNLS4t8bqFu@ep-solitary-scene-a8no7tav-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  },
});
