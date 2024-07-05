import db from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

type Params={
    params:any,
    searchParams:any
}
export const GET=async(req:Request, { params, searchParams }:Params)=>{
    try {
        const posts=await db.post.findMany()
        if(posts){
            return NextResponse.json(posts)
        }
    } catch (error) {
        return NextResponse.json({message:"Something went wrong"},{status:500})
    }
}