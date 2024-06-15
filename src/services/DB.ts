"use server";

import {sql} from '@vercel/postgres';
import {User} from "@/model/user";
import {ErrNotFound} from "@/model/errors";

export async function getUserByEmail(email: string): Promise<User> {
    const result = await sql`SELECT email, tax_amount, contributes_to FROM users WHERE email = ${email};`;
    if (result.rowCount == 0) {
        throw new Error(ErrNotFound);
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
