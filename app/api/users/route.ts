import { hashPassword } from "@/lib/hashPassword";
import db from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest) => {
    const body = await req.json();
    const existingUser = await db.user.findUnique({
        where: {
            email: body.email
        }
    })

    if(existingUser) {
        return NextResponse.json({error: "User already exists"}, { status:400 })
    }
    const hashedPassword=hashPassword(body.password)
    await db.user.create({
        data: {
            username: body.username,
            email: body.email,
            password: hashedPassword
        }
    })
    return NextResponse.json({message: "User created"}, { status:201 })
}