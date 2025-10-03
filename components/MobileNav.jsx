'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci' 
import Image from 'next/image';
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
            <div className='mt-12 mb-20 text-2xl center text-'>
                <Link href="/">
                          <Image alt="logo" width={200} height={20} className="max-w-[70%] max-h-[65px] mx-auto " src="/asset/Primary_logo.png" />
                
                </Link>
            </div>
            <nav className='flex flex-col items-center justify-center gap-8'>
                {links.map((link, index) => {
                    return(
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-Default border-b-2 border-accent-Default"}text-xl capitalize text-primaryText transition-all hover:text-accent-Default`}>
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