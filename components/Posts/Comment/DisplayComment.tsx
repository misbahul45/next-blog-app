import { getComments } from '@/fetch/posts'
import React from 'react'
import ShowMessage from './ShowMessage'

interface Props{
    idPost:string
}

const DisplayComment = async({idPost}:Props) => {
    const {comments}=await getComments(idPost)
  return (
    <div className='w-full flex flex-col items-center justify-center gap-3 py-2 px-4 border-2 border-slate-800 rounded-md shadow-lg shadow-slate-800'>
      {comments.length>0?
        comments?.map((comment:CommentPost) => (
            <ShowMessage key={comment.id} userId={comment.userId} text={comment.text} />
        ))
        :
        <p className='text-slate-800 font-semibold'>No comments</p>
        }
    </div>
  )
}

export default DisplayComment
