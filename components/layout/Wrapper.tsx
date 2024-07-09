import { authOptions } from "@/utils/auth"
import { getServerSession } from "next-auth"
import Navbar from "./Navbar"
import { getSingleUser } from "@/fetch/user"

interface Props {
    children: React.ReactNode,
}

const Wrapper = async({ children }: Props) => {
    const session:any=await getServerSession(authOptions)
    const data:any=session?await getSingleUser(session?.user):{user:null}
    const user=data?.user
  return (
    <main className="w-full min-h-screen">
     <Navbar session={session} userImage={user?.userImage} />
     {children}
    </main>
  )
}

export default Wrapper
