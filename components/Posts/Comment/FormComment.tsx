'use client'
import { costumRevalidateTags, createComment } from '@/fetch/posts'
import { revalidatePath, revalidateTag } from 'next/cache'
import React, { useState } from 'react'

interface Props {
    postId:string,
    userId:string,
    slug:string 
}

const FormComment = ({ postId, userId, slug }: Props ) => {
    const [text, setText] = useState("")
    const onSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       const newComment={
           text,
           postId,
           userId
       }
       try {
        await createComment(newComment)
       } catch (error) {
        alert(error)
       }
       setText("")
       costumRevalidateTags(postId)
    }
  return (
    <form onSubmit={onSubmit} className='w-full flex gap-4 mt-6'>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder='Write a comment' className='flex-1 py-2 pl-2 rounded outline-none ring-2 ring-slate-400 focus:ring-slate-900 bg-slate-200 text-slate-700 placeholder:text-slate-600' />
      <button type='submit' className='px-4 py-2 rounded bg-slate-700 text-slate-100 font-semibold shadow-lg shadow-slate-600 hover:bg-slate-800' >Comment</button>
    </form>
  )
}

export default FormComment
