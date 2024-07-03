import { usePathname } from 'next/navigation'
import React from 'react'
interface Props{
  type:'email' | 'password' | 'text'
  placeholder:string
  register?:Function
  id:string
  name:string
}
const Input = ({ type, placeholder, register, id, name }:Props) => {
  const pathName=usePathname()
  return (
    <div className='relative'>
      <input
      {...(register?register(name) : {})}
      type={type}
      placeholder={placeholder}
      minLength={type==="password"?8:0}
      id={id}
      name={name}
      className="peer block w-full pl-3 py-1.5 rounded-md bg-late-300 mb-5 outline-none focus:ring-2 focus:ring-blue-700 invalid:focus:ring-red-600"
      />
      {(type==="password"&&pathName!=='/sign-in') && <p className='hidden peer-invalid:block text-red-600 text-[11px] absolute -bottom-4'>Password must be at least 8 characters</p>}
    </div>
  )
}

export default Input