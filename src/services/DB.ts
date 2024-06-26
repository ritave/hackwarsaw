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

export async function getContributionsStats(): Promise<Map<string, { count: number, sum: number, match: number }>> {
  const results = await sql`SELECT contributes_to, COUNT(*), SUM(tax_amount) FROM users GROUP BY contributes_to;`
  let out = new Map<string, { count: number, sum: number, match: number }>()

  results.rows.forEach((r) => {
    let v = out.get(r.contributes_to) || {count: 0, sum: 0, match: 0}
    out.set(r.contributes_to, {count: Number(v.count) + Number(r.count), sum: Number(v.sum) + Number(r.sum), match: 0})
  })

  govMatch('quadratic', Number(process.env.GOV_MATCH), out);
  return out;
}
function govMatch(weightType: string, totalMatch: number, contributions: Map<string, { count: number, sum: number, match: number }>) {
  let weightCalc = new Map<string, (count: number, sum: number) => number>()
  weightCalc.set('linear', (count: number, sum: number): number => {
    return sum;
  })
  weightCalc.set('quadratic', (count: number, sum: number): number => {
    return Math.pow(count, 2) * sum;
  })

  let weightFunc = weightCalc.get(weightType)
  if (weightFunc === undefined) {
    return
  }

  let totalWeight = 0
  contributions.forEach(v => {
    totalWeight += weightFunc(v.count, v.sum)
  });

  contributions.forEach(v => {
    v.match = totalMatch * (weightFunc(v.count, v.sum) / totalWeight)
  })
}