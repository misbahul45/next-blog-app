import { comparePassword } from "@/lib/hashPassword";
import db from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/sign-in"
    },
    callbacks: {
        session({ session, token }: any) {
            if (token) {
                session.user = token.user
            }
            return session
        },
        jwt(params){
            if(params.user?.id){
                params.token.user=params.user.id
            }
            return params.token
        }
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    return null
                }
                const user=await db.user.findUnique({
                    where:{
                        email:credentials.email
                    }
                })
                if(!user){
                    return null
                }
                const checkPassword=comparePassword(credentials.password, user.password)
                if(!checkPassword){
                    return null
                }
                return{
                    id:user.id,
                    name:user.username,
                    email:user.email
                }
            },
        }),
    ],
    

}