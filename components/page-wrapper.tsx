import { cn } from "@/lib/utils";
import React from "react";
interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const PageWrapper = ({ children, className, title }: PageWrapperProps) => {
  return (
    <div className="w-full h-full">
      <h1 className="text-center text-3xl sm:text-5xl my-5">{title}</h1>
      <div className={cn("max-w-3xl mx-auto w-full", className)}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
