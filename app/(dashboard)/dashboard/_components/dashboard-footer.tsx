import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="p-5 sm:p-10 bg-neutral-900 text-white text-sm">
    <p className="text-xs sm:text-base text-center py-2">
      © Copyright {new Date().getFullYear()}
      <span className="capitalize font-bold sm:text-lg"> Wesley shirley christian</span>
      . All Rights Reserved
    </p>
    </footer>
  );
};

export default DashboardFooter;
