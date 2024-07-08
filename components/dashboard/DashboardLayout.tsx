'use client'
import { useState } from "react"
import UserImage from "./UserImage"
import FormEdit from "./FormEdit"
import Button from "../auth/Button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateUserSchema } from "@/lib/zod.schema"
import Input from "../auth/Input"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

type Props = {
    user:User | null
    children: React.ReactNode
}
const DashboardLayout = ({ user,children }:Props) => {
    const router=useRouter()
    const [userImage, setUserImage] = useState<string | undefined>(user?.userImage || "")
    const [edit, setEdit] = useState(false)
    const { register, handleSubmit, reset }=useForm({
      resolver:zodResolver(UpdateUserSchema),
      defaultValues:{
        username:user?.username,
        email:user?.email
      }
    })

    const handleLogout=()=>{
      signOut({})
      router.push('/sign-in')
    }

  return (
    <div  className="relative">
        <div className="absolute right-10 top-0 flex gap-4">
          <Button text={edit?'Cancel':'Edit Profile'} bgColor="bg-blue-700 text-slate-100 px-4 py-2 rounded-md shadow-lg shadow-slate-700 font-semibold hover:bg-blue-600 active:bg-blue-800" onClick={() => setEdit(!edit)} type="button" />
          <Button onClick={handleLogout} text="Logout" bgColor="bg-red-600 text-slate-100 px-4 py-2 rounded-md shadow-lg shadow-slate-700 font-semibold hover:bg-red-700 active:bg-red-800" type="button" />
        </div> 
        <UserImage edit={edit} userImage={userImage} setUserImage={setUserImage} />
        {edit?
          <FormEdit handleSubmit={handleSubmit} reset={reset} id={user?.id || ""} setEdit={setEdit} userImage={userImage|| ""}>
            <Input type="text" placeholder="User Name" register={register} id="username" name="username" />
            <Input type="email" placeholder="User Email" register={register} id="email" name="email" />
            <Button text="Update" type="submit" bgColor="bg-purple-600 px-4 py-2 rounded-full shadow-lg shadow-slate-700 font-semibold text-slate-100 block ml-auto hover:bg-purple-700 active:bg-purple-800" />
          </FormEdit>
          :
          <div className="flex justify-center gap-8">
              <div className="text-blue-600 text-xl font-semibold text-center"><span className="text-red-600">User Name :</span> {user?.username}</div>
              <div className="text-blue-600 text-xl font-semibold text-center"><span className="text-red-600">User Email :</span> {user?.email}</div>
          </div>
        }
      {children}
    </div>
  )
}

export default DashboardLayout
