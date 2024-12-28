"use client";
import { Button } from "@/components/ui/button";
import { Banknote, CheckCircle, CirclePower, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TradingViewDetails } from "./trading-view-details";
import DashboardAccountDetails from "./dashboard-account-details";
import DashboardMobileNavbar from "./dashboard-mobile-navbar";
import "./component.css";


const DashboardNavbar = () => {
  return (
    <div className="px-2 nav">
      <div className="flex justify-between items-center p-4">
        <Link href={"/"}>
        <img src='/logo-white.png' width={260} height={80} alt="logon" />
        </Link>
        <div className="items-center text-sm gap-5 hidden lg:flex">
          <div className="flex">
            <p className="font-bold">Account status:</p>
            <span className="text-green-500 animate-pulse font-bold flex items-center">
              <CheckCircle className="size-3" />
              Active
            </span>
          </div>
          <div className="flex items-center">
            <p>Account Level:</p>
            <span>Basic</span>
          </div>
          <div className="flex items-center gap-[0.5] uppercase">
            <Link href={"/accounts/logout"} className="flex-center">
              <CirclePower className="size-3" />
              Logout
            </Link>
          </div>
          <Link href={"/dashboard/funds?deposit=true"} className="flex-center">
          <Button className="h-8 bg-red-500">
            <Banknote />
            Deposite Funds
          </Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <DashboardMobileNavbar />
        </div>
      </div>
      <div className="justify-between items-center hidden lg:flex">
        <TradingViewDetails />
        <DashboardAccountDetails />
      </div>
    </div>
  );
};

export default DashboardNavbar;
