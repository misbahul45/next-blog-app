import Desc from '@/components/Posts/Desc'
import Labels from '@/components/Posts/Labels'
import Links from '@/components/Posts/Links'
import PostAuthor from '@/components/Posts/PostAuthor'
import { getPosts, getSinglePost } from '@/fetch/posts'
import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

interface Params{
    params:{
        slug:string
    }
}
const ubuntu=Ubuntu({
    weight:['400', '700'],
    subsets:['latin'],
})

const page = async( { params:{ slug } }:Params ) => {
    const { post:{ title, desc, labels, links, image, UpdatedAt, authorId } }:{ post:Post}=await getSinglePost(slug)
  return (
    <section className={`py-4 w-full max-w-2xl mx-auto ${ubuntu.className}`}>
      <h1 className='text-3xl text-blue-900 text-center font-bold'>{title}</h1> 
      <PostAuthor createdAt={UpdatedAt} authorId={authorId} /> 
      <div className="relative w-full h-96 shadow-lg shadow-slate-600 rounded-lg my-4">
        <Image alt={title} src={image} fill={true} className='object-cover rounded-lg' />
      </div>
      <Labels labels={labels} />
      <br />
      <Desc desc={desc} posting={false} />    
      <br />
      <Links links={links} />
    </section>
  )
}

export default page
