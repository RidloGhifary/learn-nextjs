"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState(0);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <button
          onClick={() => setState(state + 1)}
          className="bg-green-900 text-white rounded-xl px-4 py-2">
          Layout {state}
        </button>
        {children}
      </body>
    </html>
  );
}
