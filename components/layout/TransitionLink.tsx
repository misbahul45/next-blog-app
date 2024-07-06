import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
    href: string
    children: React.ReactNode
    [key: string]: any
}

const sleep = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const TransitionLink = ({ href, children, ...props }:Props) => {
    const router=useRouter()
    const handleTransition=async(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault()
        const body=document.querySelector('body')
        body?.classList.add('page-transition')
        await sleep(700)
        router.push(href)
        body?.classList.remove('page-transition')
    }

  return (
    <Link
    onClick={handleTransition}
    href={href} {...props}  >
      {children}
    </Link>
  )
}

export default TransitionLink
