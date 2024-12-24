"use client"
import { PropsWithChildren } from "react";
import DashboardNavbar from "./_components/navbar";
import DashboardFooter from "./_components/dashboard-footer";
import Notification from "@/components/notification";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const messages = [
    "Sign up for our newsletter for more info!",
    "Don't miss out on our latest updates!",
    "Subscribe to stay informed!",
    "Get exclusive content by signing up!",
    "Join our community today!"
  ];
  return (
    <div className="h-full w-full">
      <DashboardNavbar />
      {children}
      <Notification messages={messages} delay={5000} />
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
