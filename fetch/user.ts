import db from "@/lib/prisma"

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
    const res=await fetch(`http://localhost:3000/api/users/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    const user=await res.json()
    return {user}
}