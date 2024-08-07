"use client"
import React, { useEffect } from 'react'
import Input from './Input'
import Button from './Button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { SignUpFormSchema } from '@/lib/zod.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import db from '@/lib/prisma'
import { useRouter } from 'next/navigation'

const FormSignUp = () => {
  const router=useRouter()
  const {register, handleSubmit, reset, formState:{ errors } }=useForm<z.infer<typeof SignUpFormSchema>>({
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
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg flex flex-col justify-center rounded-md px-6 py-7 bg-slate-300 shadow-lg shadow-slate-600'>
        <h1 className="text-center text-2xl text-extrabold text-slate-800 font-semibold">Welcome to <b className="text-blue-600">Misbahul&#39;s Blog</b></h1>
        <div className='mt-2'>
            <Input register={register} type='text' placeholder='Username' id='username' name='username' />
            <Input register={register} type='email' placeholder='User Email' id='email' name='email' />
            <Input register={register} type='password' placeholder='Password' id='password' name='password' />
            <Input register={register} type='password' placeholder='Confirm Password' id='confirmPassword' name='confirmPassword' />
        </div>
        <Button type='submit' text='Create' bgColor='bg-blue-600 py-1.5 rounded-md text-slate-100 hover:bg-blue-700 active:bg-blue-500 transition-all duration-100' />
        <p className="text-center mt-4 text-lg text-slate-700">Have an Account? <Link href={'/sign-in'} className='text-blue-900 hover:text-blue-600 hover:scale-110 font-semibold'>Login</Link></p>
    </form>
  )
}

export default FormSignUp