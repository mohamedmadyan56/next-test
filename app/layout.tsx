import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/redux/provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "ShopLab — Shopping Cart",
  description: "Redux Shopping Cart Lab Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"

    >
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
