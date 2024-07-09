"use server"

import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const getSinglePost = async (slug: string) => {
    try {
        const data = await fetch(`/api/posts/${slug}`, { next:{ revalidate:0 } });
        const response = await data.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export const getPosts = async () => {
    try {
        const data = await fetch('/api/posts', { next:{ revalidate:0 } });
        const response = await data.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export const createPost = async (newPost: Partial<Post>) => {
    const session:any=await getServerSession(authOptions)
    try {
        const data = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authorId: session?.user,
                ...newPost
            })
        });
        const response = await data.json();
        return response; 
    } catch (error) {
        throw error;
    }
};


export const getAllPostsByUserId = async (userId: string) => {
    try {
        const data = await fetch(`/api/posts?userId=${userId}`, { next:{ revalidate:0 } });
        const response = await data.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export const getComments=async(postId:string)=>{
    try {
        const data = await fetch(`/api/comments?postId=${postId}`, { next:{ revalidate:0, tags: [postId] } });
        const response = await data.json();
        return { comments: response };
    } catch (error) {
        throw error;
    }
}

export const costumRevalidateTags=async(postId:string)=>{
    revalidateTag(postId)
}

export const createComment=async(comment:Partial<CommentPost>)=>{
    try {
        const data = await fetch(`/api/comments?${comment.postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...comment
            })
        });
        const response = await data.json();
        return response; 
    } catch (error) {
        throw error;
    }
}


export const getLabels = async () => {
    try {
        const data = await fetch('/api/labels', { next:{ revalidate:0 } });
        const response:any = await data.json();
        return response.labels;
    } catch (error) {
        throw error;
    }
}

