"use client"
import React, { useEffect } from 'react'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { SignUpFormSchema } from '@/lib/zod.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { FaUnlockAlt, FaUserAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa6'

const FormSignUp = () => {
  const router=useRouter()
  const {register, handleSubmit, reset, formState:{ errors } }=useForm<z.infer<typeof SignUpFormSchema>>({
    resolver:zodResolver(SignUpFormSchema),
    mode:'onChange',
    defaultValues:{
      username:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  })
  const onSubmit=async(values:z.infer<typeof SignUpFormSchema>)=>{
    try {
      await fetch('/api/users', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:values.username,
          email:values.email,
          password:values.password
        })
      })
    } catch (error) {
      alert(error as string)
      console.log(error as Error)
    }
    reset(
      {
        username:'',
        email:'',
        password:'',
        confirmPassword:''
      }
    )
    router.push('/sign-in')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg flex flex-col justify-center rounded-xl p-6 shadow-xl shadow-slate-600/50'>
        <h1 className="text-center text-3xl text-extrabold text-slate-800 font-semibold">Welcome to <b className="text-blue-700 font-bold">Misbahul&#39;s Blog</b></h1>
        <p className='text-slate-300'>Create an account to get started</p>
        <div className='my-6 space-y-6'>
          <div>
            <div className="relative">
              <input type="text" placeholder='Account username' {...register('username')} className='w-full py-2 pl-8 rounded-md shadow-lg shadow-slate-800/20' />
              <FaUserAlt className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-500' />
            </div>
            {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
          </div>
          <div>
            <div className="relative">
              <input type="text" placeholder='Account email' {...register('email')} className='w-full py-2 pl-8 rounded-md shadow-lg shadow-slate-800/20' />
              <MdEmail className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-500' />
            </div>
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
          <div>
            <div className="relative">
              <input type="text" placeholder='Account password' {...register('password')} className='w-full py-2 pl-8 rounded-md shadow-lg shadow-slate-800/20' />
              <FaKey className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-500' />
            </div>
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>          
          <div>
            <div className="relative">
              <input type="text" placeholder='Confirm password' {...register('confirmPassword')} className='w-full py-2 pl-8 rounded-md shadow-lg shadow-slate-800/20' />
              <FaUnlockAlt className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-500' />
            </div>
            {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
          </div>  
        </div>

        <Button type='submit' text='Create' bgColor='bg-blue-600 py-1.5 rounded-md text-slate-100 hover:bg-blue-700 active:bg-blue-500 transition-all duration-100' />
    </form>
  )
}

export default FormSignUp