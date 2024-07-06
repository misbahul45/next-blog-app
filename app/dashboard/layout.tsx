import NavHead from '@/components/dashboard/NavHead'
import React from 'react'

interface Props {
    children: React.ReactNode  
}

const layout = ({ children }:Props) => {
  return (
    <section className='w-full flex flex-col items-center'>
      <NavHead />
      {children}
    </section>
  )
}

export default layout
