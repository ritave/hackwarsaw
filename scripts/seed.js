const { sql } = require("@vercel/postgres");

// sql`DROP TABLE users`

sql`CREATE TABLE IF NOT EXISTS users (
    email TEXT NOT NULL,
    tax_amount INTEGER NOT NULL,
    contributes_to TEXT NOT NULL
)`

sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user00@test.com', 200, '0000000168')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user01@test.com', 200, '0000000168')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user02@test.com', 200, '0000000168')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user03@test.com', 200, '0000000168')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user04@test.com', 200, '0000000168')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user05@test.com', 1000, '0000000291')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user06@test.com', 1000, '0000000291')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user07@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user08@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user09@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user10@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user11@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user12@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user13@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user14@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user15@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user16@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user17@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user18@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user19@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user20@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user21@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user22@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user23@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user24@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user25@test.com', 50, '0000000525')`
sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES ('user26@test.com', 50, '0000000525')`