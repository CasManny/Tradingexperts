import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="p-5 sm:p-10">
      <div className="flex items-center justify-between">
        <Link href={"/"}>TradingExperts</Link>
        <p>
          {" "}
          &copy; copyright {new Date().getFullYear()}.All rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
