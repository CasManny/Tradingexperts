import React, { PropsWithChildren } from "react";
import AdminNavbar from "./_components/admin-navbar";
import { Footer } from "@/components/footer";

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <section>
      <AdminNavbar />
      <main className="">{children}</main>
      <Footer />
    </section>
  );
};

export default AdminLayout;
