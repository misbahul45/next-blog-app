import db from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request){
    const url=new URL(req.url);
    const postId=url.searchParams.get("postId");
    if(postId){
        try{
            const comments=await db.comment.findMany({
                where:{
                    postId:postId
                }
            })
            if(comments){
                return NextResponse.json( comments, { status:200 });
            }
        }catch(error){
            return NextResponse.json({ message: "Failed to fetch comments.", success: false }, { status:500 });
        }
    }
}

export async function POST(req: Request){
    const data=await req.json();
    if(data){
        try{ 
            const comments=await db.comment.create({
                data
            })
            console.log(comments)
            if(comments){
                return NextResponse.json(comments, { status:200 });
            }
        }catch(error){
            console.log(error)
            return NextResponse.json({ message: "Failed to create comment.", success: false }, { status:500 });
        }
    }
}