"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNavbar from "./mobile-navbar";

export const navroutes = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Resume",
    href: "#resume",
  },
  {
    label: "contact",
    href: "#contact",
  },
  {
    label: "Dashboard",
    href: "/accounts/sign-in",
  },
  {
    label: "Get Started",
    href: "/accounts/sign-up",
  },
];
const HomepageNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change this value to set the scroll height
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`w-full justify-center p-5 items-center flex transition-colors duration-300 ease-in ${isScrolled && "bg-neutral-900/80"}`}>
      <div className="gap-4 uppercase hidden lg:flex items-center justify-center text-white text-sm">
        {navroutes.map((route, index) => (
          <Link
            href={route.href}
            key={index}
            className="hover:text-brand-4 transition-all duration-300"
          >
            {route.label}
          </Link>
        ))}
      </div>
      <MobileNavbar />
    </nav>
  );
};

export default HomepageNavbar;
