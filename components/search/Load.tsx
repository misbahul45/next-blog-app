import React from 'react'
import { IoImage } from 'react-icons/io5'

const Load = () => {
  return (
    <div className='w-[40%] border-2 p-4 border-slate-500 shadow-lg shadow-slate-700 rounded-lg backdrop-blur-md h-96 flex flex-col justify-between animate-pulse'>
      <div className='grid place-items-center w-full h-32 bg-slate-200 rounded-lg shadow-lg shadow-slate-700'>
        <IoImage className='text-7xl text-slate-600' />
      </div>
      <div className="w-full h-24 bg-slate-200 rounded-lg shadow-lg shadow-slate-700"></div>
      <div className="flex gap-4">
        <div className="w-32 h-12 bg-slate-400 rounded-lg shadow-lg shadow-slate-700"></div>
        <div className="w-24 h-12 bg-slate-400 rounded-lg shadow-lg shadow-slate-700"></div>
      </div>
    </div>
  )
}

export default Load
