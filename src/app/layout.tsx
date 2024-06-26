import type {Metadata} from "next";
//import { Inter } from "next/font/google";
//import "./globals.css";
import {Providers} from "./providers";

//const inter = Inter({ subsets: ["latin"] });

import React from "react";

export const metadata: Metadata = {
  title: "Quadratic Funding",
  description: "Sponsor non-profits using quadratic funding algorithm",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/*<body className={inter.className}>*/}
    <body>
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}
