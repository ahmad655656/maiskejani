"use client";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { IoMdNotifications } from "react-icons/io";

// استورد الكومبوننت الخاص بالـ Dropdown
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, 
  DropdownMenuPortal, 
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="py-2 text-primaryText sticky top-0 bg-neutral-100 shadow-sm shadow-primaryText/20 z-[100]">
      <div className="container flex items-center justify-between mx-auto">
        {/* logo */}
        <Link href="/">
          <Image
            alt="logo"
            width={200}
            height={20}
            className="max-w-[70%] max-h-[65px]"
            src="/asset/Primary_logo.png"
          />
        </Link>

        {/* desktop nav */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link href="/login">
            <Button className="bg-accent-gold text-primaryText/70">LogIn</Button>
          </Link>

          {/* زر الإشعارات */}
       <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="relative border-none outline-none">
      <IoMdNotifications className="text-[30px] w-[30px] text-primaryText cursor-pointer" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        3
      </span>
    </button>
  </DropdownMenuTrigger>

  {/* هنا نستخدم Portal + position=popper */}
  <DropdownMenuPortal>
    <DropdownMenuContent
      align="end"
      sideOffset={8}
      position="popper"
      className="w-64 p-6 bg-white shadow-lg rounded-lg"
    >
      <DropdownMenuLabel className="text-primaryText">
        Notifications
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="text-primaryText">
        You got a new message
      </DropdownMenuItem>
      <DropdownMenuItem className="text-primaryText">
        Upcoming event tomorrow
      </DropdownMenuItem>
      <DropdownMenuItem className="text-primaryText">
        Your course is approved
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuPortal>
</DropdownMenu>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
