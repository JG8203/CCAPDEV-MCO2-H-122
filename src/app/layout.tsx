import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "DLSU3PS",
  description: "Made lovingly by Group 7 🥰 for MCO3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-beige">
        <NavBar />
        <div className="max-h-screen z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
