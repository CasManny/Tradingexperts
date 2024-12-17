"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navroutes } from "./homepage-navbar";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-8 text-white text-center lg:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="flex flex-col gap-5">
            {navroutes.map((route, index) => (
              <Link href={route.href} key={index}>
                {route.label}
              </Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
