import { PropsWithChildren } from "react";
import { AuthNavbar } from "./_components/auth-navbar";
import GTranslateWidget from "@/lib/translator";
import WinningsReports from "@/lib/win-report";
import WhatsAppChat from "@/lib/WhatsAppChat";
import classes from "./styles.module.css";
import { Metadata } from 'next';
import LiveChat from "@/lib/live-chat";

export const metadata: Metadata = {
  title: "Client | Wesley Shirley Christian",
  description: "Sign up with us today.",
};

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className={classes.colored}>
      <AuthNavbar />
      <main className="">{children}</main>
      <GTranslateWidget />
      <WinningsReports />
      <LiveChat />
      <WhatsAppChat />
    </section>
  );
};

export default AuthLayout;
