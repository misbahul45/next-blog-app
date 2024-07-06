import Link from 'next/link'
import React from 'react'

interface Props { 
    desc:string,
    slug?:string,
    posting:boolean
}  

const Desc = ({ desc, slug, posting }:Props) => {
    const descArray=desc.split('').splice(0, (posting?200:desc.length-1))
    
  return (
    <p>
       {descArray.map((descPost, index)=>{
        if(descPost==='\n'){
            return <br key={index} />
        }
        return <span key={index}>{descPost}</span>
       })} {posting?'......':''}
       {posting && <Link href={`/posts/${slug}`} className='text-blue-600'>Read more</Link>}
    </p>
  )
}

export default Desc
