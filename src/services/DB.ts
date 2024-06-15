"use server";

import {sql} from '@vercel/postgres';
import {NextResponse} from 'next/server';
import {User} from "@/model/user";

export async function getUserByEmail(email: string): Promise<User> {
    console.log(process.env);
    const result = await sql`SELECT (id, email) FROM users WHERE email = ${email};`;
    console.log(result);
    return new User("1");
}

export async function createUser(email: string): Promise<void> {
    const result = await sql`INSERT INTO user(email) VALUES(${email});`;
    console.log(result);
}
