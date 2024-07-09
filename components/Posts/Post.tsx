import React from 'react'
import Desc from './Desc'
import Image from 'next/image'
import Labels from './Labels'
import { IoImage } from 'react-icons/io5'

type Props=Post
const Post = ({ title, desc, image, slug, labels }:Props) => {
  return (
    <div className="w-[42%] border-2 p-4 border-slate-500 shadow-lg shadow-slate-700 rounded-lg backdrop-blur-md">
      <div className='relative w-full h-48 shadow-md shadow-slate-600 rounded-lg'>
        {image?
          <Image alt={title} src={image} fill={true} sizes="100%" className='object-cover rounded-lg' />
        :
          <div className="w-full h-full bg-slate-800 flex justify-center items-center">
            <IoImage className='text-8xl text-slate-100 opacity-75' />
          </div>
        }
      </div>
      <h1 className="text-xl font-semibold text-blue-900 my-2">{title}</h1>
      <Desc desc={desc} slug={slug} posting={true} />
      <Labels labels={labels} />
    </div>
  )
}

export default Post
