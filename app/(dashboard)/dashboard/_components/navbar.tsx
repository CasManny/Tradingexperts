import { Button } from "@/components/ui/button";
import { Banknote, CheckCircle, CirclePower } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TradingViewDetails } from "./trading-view-details";

const DashboardNavbar = () => {
  return (
    <div className="px-2">
      <div className="flex justify-between items-center p-4">
        <Link href={"/"}>TradingExperts</Link>
        <div className="flex items-center text-sm gap-5">
          <div className="flex">
            <p>Account status:</p>
            <span className="text-green-500 animate-pulse flex items-center">
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
      </div>
      <div className="">
        <TradingViewDetails />
      </div>
    </div>
  );
};

export default DashboardNavbar;
