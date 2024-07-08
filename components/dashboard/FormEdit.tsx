import { updateUser } from '@/fetch/user'
import { UpdateUserSchema } from '@/lib/zod.schema'
import React from 'react'
import { z } from 'zod'

interface Props{
    handleSubmit:Function
    children:React.ReactNode
    reset:Function,
    id:string,
    setEdit:Function,
    userImage:string
}

const FormEdit = ({handleSubmit,children,reset,id, setEdit, userImage}:Props) => {
    const onSubmit=async(values:z.infer<typeof UpdateUserSchema>)=>{
        const data=await updateUser(id,{
            ...values,
            userImage
        })
        setEdit(false)
        reset({
            username:values.username,
            email:values.email
        })
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-xl mx-auto'>
      {children}
    </form>
  )
}

export default FormEdit
