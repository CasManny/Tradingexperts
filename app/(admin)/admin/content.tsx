"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminNavbar from "./_components/admin-navbar";
import { Footer } from "@/components/footer";
import { PropsWithChildren } from "react";
import { UserProvider } from "@/lib/admin-store";

const queryClient = new QueryClient(); // Create the QueryClient instance

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AdminNavbar />
        <main className="m-10">{children}</main>
        <Footer />
      </UserProvider>
    </QueryClientProvider>
  );
};
