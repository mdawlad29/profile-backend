import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();

const { Pool } = pkg;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("render")
    ? { rejectUnauthorized: false }
    : false,
});

db.on("connect", () => {
  console.log("✅ Database connected");
});

export default db;
