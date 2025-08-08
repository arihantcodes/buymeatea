import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Buy Me A Tea",
  description: "Developed by Aman jain & Arihant jain ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative">
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
