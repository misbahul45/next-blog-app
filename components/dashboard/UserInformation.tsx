import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/auth"
import { getSingleUser } from "@/fetch/user"
import UserPosts from "./UserPosts"
import DashboardLayout from "./DashboardLayout"

interface Props{
  idUser?:string,
  username?:string
}

const UserInformation = async({ idUser, username }:Props) => {
    const session:any=await getServerSession(authOptions)
    const data=await getSingleUser(idUser?idUser:session?.user)
    const user=data?.user
    console.log(data?.user)
  return (
    <div className="w-full">
        <DashboardLayout user={user||null} idUser={idUser}>
          <h2 className="text-red-600 text-2xl font-semibold mt-4 text-center">{idUser?`${user?.username} Posts`:"My Posts"}</h2>
          <UserPosts userId={user?.id || ""} />
        </DashboardLayout>
    </div>
  )
}

export default UserInformation
