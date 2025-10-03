'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
export const link = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "courses",
    path: "/courses",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "articles",
    path: "/articles",
  },
]
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex flex-row items-center gap-8'>
      {link.map((link, index) => {
        return <Link href={link.path} key={index} className={pathname === link.path ? "text-accent-Default border-b-2 border-accent-Default" : "capitalize hover:text-accent-Default transition-all ease-linear font-medium duration-200"}>{link.name}</Link>
      })}
    </nav>
  )
}

export default Nav