'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci' 
const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className='flex items-center justify-center'>
            <CiMenuFries className='text-[32px] text-accent-Default '/>
        </SheetTrigger>
        <SheetContent className="flex flex-col ">
            <div className='mt-32 mb-40 text-2xl center text-'>
                <Link href="/">
                <h1 className='text-4xl font-semibold'>
                Luke <span className='text-accent-Default'>.</span>

                </h1>
                </Link>
            </div>
            <nav className='flex flex-col items-center justify-center gap-8'>
                {links.map((link, index) => {
                    return(
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-Default border-b-2 border-accent-Default"}text-xl capitalize transition-all hover:text-accent-Default`}>
                            {link.name} 
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav