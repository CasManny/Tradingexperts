"use client"
import { Button } from "@/components/ui/button";
import { Banknote, CheckCircle, CirclePower, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TradingViewDetails } from "./trading-view-details";
import DashboardAccountDetails from "./dashboard-account-details";
import DashboardMobileNavbar from "./dashboard-mobile-navbar";

const DashboardNavbar = () => {
  return (
    <div className="px-2">
      <div className="flex justify-between items-center p-4">
        <Link href={"/"}>TradingExperts</Link>
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
            <CirclePower className="size-3" />
            <span>Logout</span>
          </div>
          <Button className="h-8 bg-red-500">
            <Banknote />
            Deposite Funds
          </Button>
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
