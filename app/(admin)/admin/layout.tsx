import React, { PropsWithChildren } from "react";
import { Metadata } from 'next';
import { Content } from "./content";

export const metadata: Metadata = {
  title: "Admin Dashboard | Wesley Shirley Christian",
  description: "Manage All trading data",
};


const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <Content>
        {children}
      </Content>
    </section>
  );
};

export default AdminLayout;
