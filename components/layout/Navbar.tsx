'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "../auth/Button"
import { FaPenAlt, FaUser } from "react-icons/fa"
import TransitionLink from "./TransitionLink"

interface Props {
    session:any
}

const Navbar = ({ session }: Props ) => {
    const [shadow, setShadow]=useState<boolean>(false)
    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>=80){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow)
    },[])
  return (
    <nav className={`sticky top-0 left-0 w-full h-full flex justify-between items-center px-8 py-4 bg-slate-100 z-30 ${shadow&&"shadow-xl shadow-slate-500"}`}>
        <div className="flex-1">
            <Link href="/">
                <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
                    Shadow&apos;s Blog
                </h1>
            </Link>
        </div>
        <div className="flex-1 flex items-center gap-4 justify-center">
            <TransitionLink href="/">Home</TransitionLink>
            <TransitionLink href="/posts">Posts</TransitionLink>
            <TransitionLink href="/label">Label</TransitionLink>
            <TransitionLink href="/search">Search</TransitionLink>
        </div>
        <div className="flex-1 flex items-center gap-4 justify-end">
            {session.user?
            <>
                <TransitionLink href="/create" className="flex gap-2 items-center text-sm font-semibold px-4 py-2 rounded border-2 border-blue-600 hover:bg-blue-600 hover:text-slate-100 transition-all duration-200">
                    <span>Write</span>
                    <FaPenAlt className="text-lg" />
                </TransitionLink>
                <TransitionLink href={'/dashboard'} className="text-xl p-2 rounded-full border-2 border-slate-700 cursor-pointer hover:scale-110 hover:bg-slate-700 hover:text-slate-100 group transition-all duration-100">
                    <FaUser className="group-hover:shadow-xl group-hover:shadow-white transition-all duration-75" />
                </TransitionLink>
            </>
            :
            <>
                <Link href="/sign-in">
                    <Button text="Login" type="button" bgColor="font-semibold bg-blue-500 px-4 py-2 rounded text-slate-100 hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-700" />
                </Link>
            </>
            }
        </div>
    </nav>
  )
}

export default Navbar
