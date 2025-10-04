"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Cookie from "cookie-universal";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const cookies = Cookie();
    const token = cookies.get("student");
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = async () => {
    const cookies = Cookie();
    const token = cookies.get("student");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 👈 تمرير التوكن
        },
      });

      if (!res.ok) {
        console.error("Logout failed", await res.json());
      }
    } catch (err) {
      console.error("Network error during logout", err);
    } finally {
      cookies.remove("student");
      setIsLoggedIn(false);
      window.location.href = "/login"; // 👈 يرجعه لصفحة تسجيل الدخول
    }
  };

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

          {/* زر login/logout */}
          {!isLoggedIn ? (
            <Link href="/login">
              <Button className="bg-accent-gold text-primaryText/70">
                LogIn
              </Button>
            </Link>
          ) : (
            <Button
              onClick={handleLogout}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </Button>
          )}
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
