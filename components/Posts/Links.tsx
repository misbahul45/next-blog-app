import Link from 'next/link'
import React from 'react'
import { FaLink } from 'react-icons/fa6'

interface Props {
    links:LinkPost[]
}

const Links = ({ links }:Props) => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.link}
          className="flex gap-2 items-center text-slate-700 hover:text-blue-600 transition-all duration-200"
        >
          <FaLink /> {link.link}
        </Link>
      ))}
    </>
  )
}

export default Links
