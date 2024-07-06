'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavHead = () => {
    const pathName=usePathname()
  return (
    <div className='flex gap-4 text-red-600 font-semibold items-center'>
      <Link href={'/dashboard' } className={`${pathName==="/dashboard"&&"w-24 text-center py-2 bg-red-600 text-slate-100 rounded-full"} hover:scale-110 transition-all duration-100`}>Profile</Link>
      <Link href={'/dashboard/posts'} className={`${pathName==="/dashboard/posts"&&"w-24 text-center py-2 bg-red-600 text-slate-100 rounded-full"} hover:scale-110 transition-all duration-100`}>Posts</Link>
    </div>
  )
}

export default NavHead
