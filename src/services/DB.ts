"use server";

import {sql} from '@vercel/postgres';
import {User} from "@/model/user";
import {ErrNotFound} from "@/model/errors";

export async function getUserByEmail(email: string): Promise<User> {
  const result = await sql`SELECT email, tax_amount, contributes_to FROM users WHERE email = ${email};`;
  if (result.rowCount == 0) {
    // Create user
    return createUser(email).then(() => {
      return {
        email: email,
        taxAmount: 0,
        contributesTo: "",
      }
    });
  }
  return {
    email: result.rows[0].email,
    taxAmount: result.rows[0].tax_amount,
    contributesTo: result.rows[0].contributes_to,
  }
}

export async function createUser(email: string): Promise<void> {
  await sql`INSERT INTO users(email, tax_amount, contributes_to) VALUES(${email}, 0, '');`;
}

export async function updateUser(u: User): Promise<void> {
  await sql`UPDATE users SET tax_amount=${u.taxAmount}, contributes_to=${u.contributesTo} WHERE email = ${u.email};`;
}

export async function getContributionsStats(): Promise<Map<string, { count: number, sum: number }>> {
  const results = await sql`SELECT contributes_to, COUNT(*), SUM(tax_amount) FROM users GROUP BY contributes_to;`
  let out = new Map<string, { count: number, sum: number }>

  console.log(out)
  return out;
}
