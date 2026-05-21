import {neon} from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL);

export default sql;

// import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

// const sql = neon(process.env.DATABASE_URL);

// Test connection
async function testConnection() {
  try {
    await sql`SELECT 1`;
    console.log("✅ Neon Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
  }
}

testConnection();

// export default sql;