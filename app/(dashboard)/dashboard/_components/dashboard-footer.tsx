import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="p-5 sm:p-10 bg-neutral-900 text-white text-sm">
      <div className="flex items-center justify-center flex-col">
        <p>
          {" "}
          &copy; copyright {new Date().getFullYear()} TradingExperts.All rights
          Reserved.
        </p>

        <p>2 Dobsons Way, Bessbrook, Newry, Northern Ireland, BT35 7FH</p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
