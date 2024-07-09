import db from "@/lib/prisma"
import { BASE_URL } from "./url"

export const getSingleUser = async (id:string) => {
    if(id){
        const user=await db.user.findUnique({
            where:{
                id
            }
        })
        return {user}
    }

}

export const updateUser=async(id:string, data:Partial<User>)=>{
    const res=await fetch(`${BASE_URL}/api/users/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const user=await res.json()
    return {user}
}