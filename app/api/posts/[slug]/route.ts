import db from "@/lib/prisma";
import { controlSinglePost } from "@/utils/postFunction";
import { NextResponse } from "next/server";

type Params={
    params:any,
}
export async function GET(req: Request, { params }:Params){
    const { slug }:{ slug:string} = params
    const searchPost=await db.post.findUnique({
        where:{
            slug:slug
        }
    })
    if(searchPost){
        const labels=await db.label.findMany({
            where:{
                postId:searchPost.id
            }
        })
        const links=await db.link.findMany({
            where:{
                postId:searchPost.id
            }
        })
        const comments=await db.comment.findMany({
            where:{
                postId:searchPost.id
            }
        })
        const post=controlSinglePost({ post:searchPost, labels, links, comments })
        return NextResponse.json({ post }, { status:200 });
    }
}