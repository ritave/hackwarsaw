const { sql } = require("@vercel/postgres");

console.log(process.env)

// sql`DROP TABLE contributions`
// sql`DROP TABLE users`

sql`CREATE TABLE IF NOT EXISTS users (
    email TEXT NOT NULL,
    tax_amount INTEGER NOT NULL,
    contributes_to TEXT NOT NULL    
)`

