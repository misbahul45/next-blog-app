import { getSingleUser } from "@/fetch/user"
import Image from "next/image"
import Link from "next/link"
import { FaUser } from "react-icons/fa"

interface Props{
    userId:string
    text:string
}
const ShowMessage = async({ userId, text }:Props) => {
    const data:any=await getSingleUser(userId)
    const user=data?.user
  return (
    <div className="relative w-full">
      <Link href={`/dashboard/${user?.id}`} className="flex items-center gap-2">
        <div className="w-9 h-9 border-2 relative">
            {user?.userImage?
            <Image alt="user image" src={user.userImage||""} fill={true} className="rounded-full object-cover" />
            :
            <div className="grid place-items-center w-full h-full rounded-full border-2 border-slate-500 text-xl">
                <FaUser />
            </div>
            }
        </div>
        <span className="text-xs text-slate-500">{user?.username}</span>
      </Link>
      <p className="ml-4 text-slate-900">{text}</p>
    </div>
  )
}

export default ShowMessage
