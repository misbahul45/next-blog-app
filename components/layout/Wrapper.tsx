import { authOptions } from "@/utils/auth"
import { getServerSession } from "next-auth"
import Navbar from "./Navbar"

interface Props {
    children: React.ReactNode,
}

const Wrapper = async({ children }: Props) => {
    const session=await getServerSession(authOptions)
  return (
    <main>
     <Navbar session={session} />
     {children}
    </main>
  )
}

export default Wrapper
