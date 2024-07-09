import React from 'react'
import fotoU from "@/public/fotou.jpg"
import Image from 'next/image'

const page = () => {
  return (
    <section className='h-[calc(100vh-4rem)] flex flex-col items-center justify-center'>
      <iframe src="https://misbahul-cv.vercel.app/" className='w-full h-full border-0' />
    </section>
  )
}

export default page
