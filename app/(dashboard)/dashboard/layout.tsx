import { PropsWithChildren } from "react";
import { Metadata } from 'next';
import { Content } from "./content";

export const metadata: Metadata = {
  title: "Dashboard | Wesley Shirley Christian",
  description: "Your dashboard overview of trading data",
};


const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full w-full">
      <Content>
        {children}
      </Content>
    </div>
  );
};

export default DashboardLayout;
