"use server"

import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export const getSinglePost = async (slug: string) => {
    try {
        const data = await fetch(`http://localhost:3000/api/posts/${slug}`, { next:{ revalidate:0 } });
        const response = await data.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export const getPosts = async () => {
    try {
        const data = await fetch('http://localhost:3000/api/posts', { next:{ revalidate:0 } });
        const response = await data.json();
        return response;
    } catch (error) {
        throw error;
    }
}

export const createPost = async (newPost: Partial<Post>) => {
    const session:any=await getServerSession(authOptions)
    try {
        const data = await fetch('http://localhost:3000/api/posts', {
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
        const data = await fetch(`http://localhost:3000/api/posts?userId=${userId}`, { next:{ revalidate:0 } });
        const response = await data.json();
        return response;
    } catch (error) {
        throw error;
    }
}
