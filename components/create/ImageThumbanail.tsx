import { OurFileRouter } from '@/app/api/uploadthing/core';
import { utapi } from '@/utils/uploadthing';
import { UploadButton } from '@uploadthing/react';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { PiImagesSquareDuotone } from "react-icons/pi";

interface Props {
  setImage:Function
  image:string
}


const ImageThumbanail = ({ setImage, image }:Props) => {

  return (
    <div className='flex items-center gap-2 w-full max-w-[70%] my-4'>
        <div className='grid place-items-center flex-1 h-72 border-2 border-slate-800 rounded-lg shadow-md shadow-slate-800'>
          {image ?
             <div className='relative w-full h-full'>
              <Image alt='image' src={image} className='rounded-md' style={{objectFit:'cover'}} sizes='w-full h-full' layout='fill' />
             </div>
            :
            (<div className='text-2xl text-slate-800 flex justify-center items-center'>
              <h1 className='font-semibold'>Thumbnail</h1>
              <div className='text-4xl text-center'>
                <PiImagesSquareDuotone />
              </div> 
            </div>)
          }
        </div>
        <UploadButton <OurFileRouter, "imageUploader">
          endpoint="imageUploader"
          onClientUploadComplete={(res:any) => {
            setImage(res[0].url)
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
    </div>
  )
}

export default ImageThumbanail
