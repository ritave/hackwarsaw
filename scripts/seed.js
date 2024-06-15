const { sql } = require("@vercel/postgres");

console.log(process.env)

sql`CREATE TABLE IF NOT EXISTS contributions (
        id INTEGER PRIMARY KEY,
        user_email TEXT NOT NULL,
        krs TEXT NOT NULL,
        amount INTEGER NOT NULL
);`;

sql`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL    
)`

