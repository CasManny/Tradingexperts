"use client";
import DashboardNavbar from "./_components/navbar";
import DashboardFooter from "./_components/dashboard-footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "@/lib/store";
import WhatsAppChat from "@/lib/WhatsAppChat";
import GTranslateWidget from "@/lib/translator";
import WinningsReports from "@/lib/win-report";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient(); // Create the QueryClient instance

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <DashboardNavbar />
        {children}
        <WinningsReports />
        <WhatsAppChat />
        <GTranslateWidget />
        <DashboardFooter />
      </StoreProvider>
    </QueryClientProvider>
  );
};
