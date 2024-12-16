"use client"
import { PropsWithChildren } from "react";
import DashboardNavbar from "./_components/navbar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full">
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
