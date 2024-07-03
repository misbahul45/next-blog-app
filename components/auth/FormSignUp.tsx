"use client"
import React from 'react'
import Input from './Input'
import Button from './Button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { SignUpFormSchema } from '@/lib/zod.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import db from '@/lib/prisma'

const FormSignUp = () => {
  const {register, handleSubmit, reset}=useForm<z.infer<typeof SignUpFormSchema>>({
    resolver:zodResolver(SignUpFormSchema),
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
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full h-[85%] max-w-lg flex flex-col justify-center rounded-md px-6 py-7 bg-slate-300 shadow-lg shadow-slate-600'>
        <h1 className="text-center text-2xl text-extrabold text-slate-800 font-semibold">Welcome to <b className="text-blue-600">Misbahul's Blog</b></h1>
        <div className='mt-2'>
            <Input register={register} type='text' placeholder='Username' id='username' name='username' />
            <Input register={register} type='email' placeholder='User Email' id='email' name='email' />
            <Input register={register} type='password' placeholder='Password' id='password' name='password' />
            <Input register={register} type='password' placeholder='Confirm Password' id='confirmPassword' name='confirmPassword' />
        </div>
        <Button type='submit' text='Create' bgColor='bg-blue-600 py-1.5 rounded-md text-slate-100 hover:bg-blue-700 active:bg-blue-500 transition-all duration-100' />
        <div className='flex items-center justify-center my-4'>
           <span className='flex-1 h-1 bg-slate-400' />
           <span className='text-slate-400 text-lg px-3'>Or</span>
           <span className='flex-1 h-1 bg-slate-400' />
        </div>
        <div className="flex flex-col gap-4">
            <Button type='button' text='Goggle' bgColor='bg-slate-400 py-1.5 text-slate-800 rounded-md shadow-md shadow-slate-600 hover:bg-blue-700 hover:text-slate-100' />
            <Button type='button' text='Github' bgColor='bg-slate-800 py-1.5 text-slate-100 rounded-md shadow-md shadow-slate-600 hover:bg-slate-900 hover:text-slate-100' />
        </div>
        <p className="text-center mt-4 text-lg text-slate-700">Have an Account? <Link href={'/sign-in'} className='text-blue-900 hover:text-blue-600 hover:scale-110 font-semibold'>Login</Link></p>
    </form>
  )
}

export default FormSignUp