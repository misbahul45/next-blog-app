import Image from 'next/image'
import React from 'react'
import signInImage from "@/public/sign-in-img.avif"
import FormSignIn from '@/components/auth/FormSignIn'
const page = () => {
  return (
    <section className="h-[calc(100vh-4rem)] grid place-items-center">
        <div className="w-full max-w-[80%] h-[85%] bg-slate-200 shadow-lg shadow-slate-500 rounded-lg flex">
            <div className="flex-1">
                <Image  src={signInImage} alt='sign-in-image' className="h-full rounded-l-lg"/>
            </div>
            <div className="flex-1 grid place-items-center">
                <FormSignIn />
            </div>
        </div>
    </section>
  )
}

export default page