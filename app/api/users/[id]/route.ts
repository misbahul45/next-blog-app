import db from "@/lib/prisma"
import { NextResponse } from "next/server"

type Params={
    params:{
        id:string
    }
}
export const PATCH=async(req:Request, {params}:Params)=>{
    try {
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
    } catch (error) {
        return NextResponse.json({error}, { status:500 })
    }
}