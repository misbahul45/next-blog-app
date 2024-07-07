import { getServerSession } from "next-auth"
import UserImage from "./UserImage"
import { authOptions } from "@/utils/auth"
import { getSingleUser } from "@/fetch/user"
import UserPosts from "./UserPosts"

const UserInformation = async() => {
    const session:any=await getServerSession(authOptions)
    const { user }:{user:User|null}=await getSingleUser(session?.user)
  return (
    <div  className="w-full">
        <UserImage userImage={user?.userImage} />
        <div className="flex justify-center gap-8">
            <div className="text-blue-600 text-xl font-semibold text-center"><span className="text-red-600">User Name :</span> {user?.username}</div>
            <div className="text-blue-600 text-xl font-semibold text-center"><span className="text-red-600">User Email :</span> {user?.email}</div>
        </div>
        <h2 className="text-red-600 text-2xl font-semibold mt-4 text-center">My Posts</h2>
        <UserPosts userId={user?.id || ""} />
    </div>
  )
}

export default UserInformation
