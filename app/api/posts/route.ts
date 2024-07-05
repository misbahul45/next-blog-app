import db from "@/lib/prisma"
import { slugify } from "@/lib/slugify";
import { NextRequest, NextResponse } from "next/server"

type Params={
    params:any,
    searchParams:any
}
export async function GET(req: Request){
    
}

export async function Post(req: Request){
    try {
        const { title, desc, labels, links, image, authorId }: Partial<Post> = await req.json();
        if (title || desc || image || authorId || labels || links) {
            const slug:string=slugify(title || "")
            await db.post.create({
                data: {
                    title: title || "",
                    slug,
                    desc: desc || "",
                    image: image || "",
                    authorId: authorId || "",
                }
            });
            if (labels) {
                await db.label.createMany({
                    data: labels.map((label: Partial<LabelPost>) => ({
                        name: label.name || ""
                    }))
                });
            }

            if (links) {
                await db.link.createMany({
                    data: links.map((link: LinkPost) => ({
                        link: link.link || ""
                    }))
                });
            }

            return NextResponse.json({ message: "Post created successfully." });
        }
        return NextResponse.json({ message: "Failed to create post." }, { status:500 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create post." }, { status:500 });
    }
}
