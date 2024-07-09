import db from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    try {
        const labels=await db.label.findMany({})
        if(labels){
            return NextResponse.json({labels})
        }
    } catch (error) {
        return NextResponse.json({labels:null}, { status:500 })
    }
}