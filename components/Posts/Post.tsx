import React from 'react'
import Desc from './Desc'
import Image from 'next/image'
import Labels from './Labels'

type Props=Post
const Post = ({ title, desc, image, slug, labels }:Props) => {
  return (
    <div className="w-[42%] border-2 p-4 border-slate-500 shadow-lg shadow-slate-700 rounded-lg backdrop-blur-md">
      <div className='relative w-full h-48 shadow-md shadow-slate-600 rounded-lg'>
        <Image alt={title} src={image} fill={true} className='object-cover rounded-lg' />
      </div>
      <h1 className="text-xl font-semibold text-blue-900 my-2">{title}</h1>
      <Desc desc={desc} slug={slug} posting={true} />
      <Labels labels={labels} />
    </div>
  )
}

export default Post
