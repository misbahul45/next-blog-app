import CreatePost from '@/components/create/CreatePost'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins=Poppins({
    subsets:['latin'],
    weight:["400","600","800"]
})

const page = () => {
  return (
    <section className={`flex flex-col justify-center items-center min-h-screen py-8 ${poppins.className}`}>
      <h1 className={`font-bold text-5xl`}>Create Posts</h1>
      <CreatePost />
    </section>
  )
}

export default page
