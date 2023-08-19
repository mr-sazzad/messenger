"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/authContext";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Created by Next js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
