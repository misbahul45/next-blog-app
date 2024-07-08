'use client'
import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";
import Image from "next/image";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

interface Props{
    userImage?:string,
    edit:boolean,
    setUserImage:Function
}

const UserImage = ({ userImage,edit, setUserImage }:Props) => {
  return (
    <div className="my-3 flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 mb-3 rounded-full shadow shadow-slate-500">
        {userImage?
            <Image alt="user image" src={userImage || ""} fill={true} className="object-cover rounded-full" />
            :
            <div className="grid place-items-center w-full h-full rounded-full border-2 border-slate-500 text-3xl">
              <FaUser />
            </div>
        }
      </div>
        {edit&&
          <UploadButton <OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res:any) => {
            setUserImage(res[0].url)
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
        }
    </div>
  )
}
export default UserImage
