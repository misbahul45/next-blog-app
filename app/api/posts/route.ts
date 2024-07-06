import db from "@/lib/prisma"
import { slugify } from "@/lib/slugify";
import { controlPost } from "@/utils/postFunction";
import { NextRequest, NextResponse } from "next/server"

type Params={
    params:any,
    searchParams:any
}
export async function GET(req: Request){
    try {
        const allPost = await db.post.findMany();
        const labels=await db.label.findMany();
        const links=await db.link.findMany();
        const comments=await db.comment.findMany();
        if(allPost && labels && links){
            const posts=controlPost({ allPost, labels, links, comments });
            return NextResponse.json({ posts }, { status:200 });
        }

        
    } catch (error) {
        
    }
}

export async function POST(req: Request){
    try {
        const { title, desc, labels, links, image, authorId }: Partial<Post> = await req.json();
        if (title && desc && image && authorId && labels && links) {
            const slug:string=slugify(title || "")
            const post=await db.post.create({
                data: {
                    title: title || "",
                    slug,
                    desc: desc || "",
                    image: image || "",
                    authorId: authorId || "",
                }
            });
            if (labels && post) {
                await db.label.createMany({
                    data: labels.map((label: Partial<LabelPost>) => ({
                        name: label.name || "",
                        postId: post.id
                    }))
                });
            }

            if (links && post) {
                await db.link.createMany({
                    data: links.map((link: LinkPost) => ({
                        link: link.link || "",
                        postId: post.id
                    }))
                });
            }

            return NextResponse.json({ message: "Post created successfully.", success: true }, { status:200 });
        }
        return NextResponse.json({ message: "Failed to create post.", success: false }, { status:500 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to create post.", success: false }, { status:500 });
    }
}
