import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Notification from "@/components/notification";

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Specify the weights you need
  variable: '--font-poppins',
});



export const metadata: Metadata = {
  title: "Trading",
  description: "Going the New Era of trading giants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = [
    "Sign up for our newsletter for more info!",
    "Don't miss out on our latest updates!",
    "Subscribe to stay informed!",
    "Get exclusive content by signing up!",
    "Join our community today!"
  ];
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable} antialiased`}
      >
        {children}
        <Notification messages={messages} delay={5000} />
      </body>
    </html>
  );
}
