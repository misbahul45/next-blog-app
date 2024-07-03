"use client"
import React from 'react'
import Input from './Input'
import Button from './Button'
import { IoLogoGoogle, IoLogoGithub} from "react-icons/io";
import AuthIcon from './AuthIcon';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { SignInSchema } from '@/lib/zod.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormSignIn = () => {
  const router=useRouter()
  const [loading, setLoading]=React.useState(false)
  const {register, handleSubmit, reset}=useForm<z.infer<typeof SignInSchema>>({
    resolver:zodResolver(SignInSchema),
    defaultValues:{
      email:'',
      password:''
    }
  })
  const onSubmit=async(values:z.infer<typeof SignInSchema>)=>{
    setLoading(true)
    const signInData=await signIn('credentials',{
      redirect:false,
      email:values.email,
      password:values.password
    })
    if(signInData?.error){
      return alert(signInData.error)
    }else{
      router.push('/posts')
    } 
    setLoading(false)
    reset({
      email:'',
      password:''
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[72%] flex flex-col'>
        <h1 className='text-center mb-6 text-4xl font-extrabold'>Welcome Back</h1>
        <Input register={register} type='email' id='email' placeholder='User email' name='email' />
        <Input register={register} type='password' id='password' placeholder='Password' name='password' />
        <Button text={loading?'Loading...':'Login'} type='submit' bgColor={`bg-blue-600 text-slate-100 font-semibold hover:bg-blue-700 py-1.5 rounded-full mt-2 active:bg-blue-600 ${loading&&"animete-pulse"}`} />
        <div className='flex justify-center mt-8 gap-2'>
            <AuthIcon Icon={IoLogoGithub} bgColor='bg-slate-600 text-slate-100 hover:bg-slate-800' />
            <AuthIcon Icon={IoLogoGoogle} bgColor='bg-blue-500 text-slate-100 hover:bg-blue-800' />
        </div>
        <p className="text-center mt-4 text-lg text-slate-700">Don't Have an Account? <Link href={'/sign-up'} className='text-blue-900 hover:text-blue-600 hover:scale-110 font-semibold'>Create</Link></p>
    </form>
  )
}

export default FormSignIn