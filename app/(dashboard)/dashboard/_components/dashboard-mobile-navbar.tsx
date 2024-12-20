"use client";
import {
  Banknote,
  CalendarSync,
  ChartCandlestick,
  CirclePower,
  Headphones,
  History,
  LockKeyholeIcon,
  Menu,
  User,
  UsersRound,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

const mobileRoutes = [
  {
    label: "Trading",
    href: "/dashboard",
    icon: ChartCandlestick,
  },
  {
    label: "Deposit Funds",
    href: "/dashboard/funds?deposit=true",
    icon: Banknote,
  },
  {
    label: "Withdraw Funds",
    href: "/dashboard/funds?withdrawal=true",
    icon: Banknote,
  },
  {
    label: "Transaction History",
    href: "/dashboard/history?transactions=true",
    icon: CalendarSync,
  },
  {
    label: "Trading History",
    href: "/dashboard/history?trade=true",
    icon: History,
  },
  {
    label: "Personal Data",
    href: "/dashboard/settings?personal-data=true",
    icon: User,
  },
  {
    label: "Security Settings",
    href: "/dashboard/settings?security=true",
    icon: LockKeyholeIcon,
  },
  {
    label: "My Referrals",
    href: "/dashboard/referral",
    icon: UsersRound,
  },
  {
    label: "contact us",
    href: "/dashboard/contact",
    icon: Headphones,
  },
  {
    label: "Logout",
    href: "#",
    icon: CirclePower,
  },
];

const DashboardMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="size-7" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-5 gap-5">
          {mobileRoutes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className="w-full flex gap-2 items-center"
              onClick={handleLinkClick}
            >
              <route.icon />
              {route.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMobileNavbar;
