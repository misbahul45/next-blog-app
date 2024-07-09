import { getSingleUser } from "@/fetch/user"
import Image from "next/image"
import Link from "next/link"
import { FaUser } from "react-icons/fa"

interface Props{
    createdAt:Date,
    authorId:string
}

const PostAuthor = async({createdAt, authorId}:Props) => {
    const data=await getSingleUser(authorId)
    const user=data?.user
  return (
    <Link href={`/dashboard/${user?.id}`} className="flex items-center justify-between px-8">
        <div className="flex gap-3 items-center">
            <div className="relative w-12 h-12 rounded-full border-2 border-red-500">
                {user?.userImage?
                    <Image alt="user image" src={user?.userImage||""} sizes="100%" fill={true} className="rounded-full object-cover" />
                    :
                    <div className="grid place-items-center w-full h-full rounded-full border-2 border-slate-500 text-xl">
                        <FaUser />
                    </div>
                }
            </div>
            <div>
                <h1 className="font-semibold text-xl text-slate-700">{user?.username}</h1>
            </div>
        </div> 
        <span className="text-slate-500 text-sm">{new Date(createdAt).toDateString()}</span>
    </Link>
  )
}

export default PostAuthor
