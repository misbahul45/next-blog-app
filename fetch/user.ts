import db from "@/lib/prisma"

export const getSingleUser = async (id:string) => {
    const user = await db.user.findUnique({
        where:{
            id
        }
    })
    return { user }
}