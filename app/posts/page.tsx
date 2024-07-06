import Post from '@/components/Posts/Post'
import { getPosts } from '@/fetch/posts'
import db from '@/lib/prisma'
import React from 'react'



const page = async() => {
  const { posts }:{ posts:Post[] }=await getPosts()
  return (
    <section className="py-4 flex w-full max-w-[80%] mx-auto gap-8 justify-center flex-wrap">
      {posts.map((post)=>(
        <Post key={post.id} {...post} />
      ))}
    </section>
  )
}

export default page