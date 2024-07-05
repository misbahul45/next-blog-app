"use server"

import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

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
