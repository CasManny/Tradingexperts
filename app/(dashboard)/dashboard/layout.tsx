"use client";
import { PropsWithChildren } from "react";
import DashboardNavbar from "./_components/navbar";
import DashboardFooter from "./_components/dashboard-footer";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <DashboardNavbar />
      {children}
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
