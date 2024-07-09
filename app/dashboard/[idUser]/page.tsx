import UserInformation from "@/components/dashboard/UserInformation"
import { Roboto } from "next/font/google"

type Params={
    params:{
        idUser:string
    }
}
const roboto=Roboto({
  weight:['400', '700'],
  subsets:['latin'],
})
const page = ( { params:{ idUser } }:Params ) => {
  return (
    <div className={`w-full flex flex-col justify-center items-center mt-6 ${roboto.className}`}>
      <h1 className="text-5xl font-semibold my-4">User Information</h1>
      <UserInformation idUser={idUser}  />
    </div>
  )
}

export default page
