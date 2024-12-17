"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <nav className={`w-full p-5  hidden lg:flex justify-center items-center transition-colors duration-300 ease-in ${isScrolled && "bg-neutral-900/80"}`}>
      <div className="flex gap-4 uppercase text-white text-sm">
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
    </nav>
  );
};

export default HomepageNavbar;
