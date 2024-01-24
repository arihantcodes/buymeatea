import type { Metadata } from "next";

import "./globals.css";



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
      <body>{children}</body>
    </html>
  );
}
