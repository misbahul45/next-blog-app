import DisplayComment from '@/components/Posts/Comment/DisplayComment'
import FormComment from '@/components/Posts/Comment/FormComment'
import Desc from '@/components/Posts/Desc'
import Labels from '@/components/Posts/Labels'
import Links from '@/components/Posts/Links'
import PostAuthor from '@/components/Posts/PostAuthor'
import { getPosts, getSinglePost } from '@/fetch/posts'
import { authOptions } from '@/utils/auth'
import { getServerSession } from 'next-auth'
import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoImage } from 'react-icons/io5'

interface Params{
    params:{
        slug:string
    }
}
const ubuntu=Ubuntu({
    weight:['400', '700'],
    subsets:['latin'],
})

export async function generateMetadata({ params:{ slug } }:Params) {
  const { post:{ title } }:{ post:Post}=await getSinglePost(slug)
  return {
    title,
  }
}

const page = async( { params:{ slug } }:Params ) => {
    const session:any=await getServerSession(authOptions)
    const { post:{ id,title, desc, labels, links, image, UpdatedAt, authorId } }:{ post:Post}=await getSinglePost(slug)
  return (
    <section className={`py-4 w-full max-w-2xl mx-auto ${ubuntu.className}`}>
      <h1 className='text-3xl text-blue-900 text-center font-bold'>{title}</h1> 
      <PostAuthor createdAt={UpdatedAt} authorId={authorId} /> 
      <div className="relative w-full h-96 shadow-lg shadow-slate-600 rounded-lg my-4">
        {image?
          <Image alt={title} src={image} fill={true} sizes="100%" className='object-cover rounded-lg' />
          :
          <div className="w-full h-full bg-slate-800 flex justify-center items-center">
            <IoImage className='text-8xl text-slate-100 opacity-75' />
          </div>
        }
      </div>
      <Labels labels={labels} />
      <br />
      <Desc desc={desc} posting={false} />    
      <br />
      <Links links={links} />
      <div className='flex flex-col gap-4'>
        <FormComment slug={slug} postId={id} userId={session?.user} />
        <DisplayComment idPost={id} />
      </div>
    </section>
  )
}

export default page
