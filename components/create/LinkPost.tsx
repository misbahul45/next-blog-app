import Link from 'next/link';
import React from 'react'
import { FaRegTrashAlt, FaLink } from "react-icons/fa";


interface Props{
  id:number,
  link:string,
  setLinks:Function
}
const LinkPost = ({ id, link, setLinks }:Props) => {
  const handleRemoveLink=()=>{
    setLinks((prev:LinkPost[])=>prev.filter((link)=>link.id!==id))
  }
  return (
    <div className='flex gap-3 items-center w-full'>
      <div className='text-xl text-slate-800'>
        <FaLink/>
      </div>
      <Link href={link} className='text-blue-700'>{link}</Link>
      <div onClick={handleRemoveLink} className='hover:text-lg transition-all duration-75 cursor-pointer'>
        <FaRegTrashAlt />
      </div>
    </div>
  )
}

export default LinkPost
