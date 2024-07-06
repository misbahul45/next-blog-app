import Link from 'next/link'
import React from 'react'

interface Props { 
    desc:string,
    slug:string
}  

const Desc = ({ desc, slug }:Props) => {
    const descArray=desc.split('').splice(0, 100)
  return (
    <p>
       {descArray.map((descPost, index)=>{
        if(descPost==='\n'){
            return <br key={index} />
        }
        return <span key={index}>{descPost}</span>
       })}
       <Link href={`/posts/${slug}`} className='text-blue-700 ml-2 hover:text-blue-900 hover:border-b-2 hover:border-blue-700'>Read more</Link>
    </p>
  )
}

export default Desc
