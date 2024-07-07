'use client'

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import { useState } from "react";

interface Props{
    userImage?:string
}

const UserImage = ({ userImage }:Props) => {
    const [userImageState, setUserImageState] = useState<string | undefined>(userImage)
  return (
    <div className="my-3 flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 mb-3">
        {userImage?
            <Image alt="user image" src={userImageState || ""} fill={true} className="object-cover rounded-full" />
            :
            <div className="w-full h-full rounded-full border-2 border-slate-500"></div>
        }
      </div>
        <UploadButton <OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res:any) => {
            setUserImageState(res[0].url)
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
    </div>
  )
}
export default UserImage
