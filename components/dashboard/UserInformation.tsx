import { getServerSession } from "next-auth"
import UserImage from "./UserImage"
import { authOptions } from "@/utils/auth"
import { getSingleUser } from "@/fetch/user"
import UserPosts from "./UserPosts"
import DashboardLayout from "./DashboardLayout"

const UserInformation = async() => {
    const session:any=await getServerSession(authOptions)
    const { user }:{user:User|null}=await getSingleUser(session?.user)
  return (
    <div className="w-full">
        <DashboardLayout user={user}>
          <h2 className="text-red-600 text-2xl font-semibold mt-4 text-center">My Posts</h2>
          <UserPosts userId={user?.id || ""} />
        </DashboardLayout>
    </div>
  )
}

export default UserInformation
