import type { Metadata } from "next";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ek chai pilade",
  description: "Developed by Aman jain & Arihant jain ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
