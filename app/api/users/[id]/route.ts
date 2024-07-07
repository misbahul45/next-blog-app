import db from "@/lib/prisma"
import { NextResponse } from "next/server"

type Params={
    params:{
        id:string
    }
}
export async function GET(req: Request, { params }:Params) {
    const { id }=params
    const user=await db.user.findUnique({
        where:{
            id
        }
    })
    if(!user){
        return NextResponse.json({error:"User not found"}, { status:404 })
    }
    return NextResponse.json({user})
}

export const PATCH=async(req:Request, {params}:Params)=>{
    const {id}=params
    const dataUser:Partial<User>=await req.json()
    const user=await db.user.update({
        where:{
            id
        },
        data:{
            ...dataUser
        }
    })
    return NextResponse.json({user})
}