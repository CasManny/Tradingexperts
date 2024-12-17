"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navroutes } from "./homepage-navbar";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="size-5 text-white text-center lg:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="flex flex-col gap-5">
            {navroutes.map((route, index) => (
              <Link href={route.href}>{route.label}</Link>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
