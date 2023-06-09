"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import Theme from "./theme";
import { SessionProvider } from "next-auth/react";
import { metadata } from "@/components/metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" id="all">
      <body className={`${inter.className} scroll-smooth bg-slate-50 dark:bg-slate-800 dark:text-slate-50`}>
        <SessionProvider>
          <Header />
          <section className="relative">
            <div className="fixed bg-blue-400 rounded-full opacity-50 top-10 left-4 h-72 w-72 blur-3xl filter md:h-96 md:w-96"></div>
            <div className="fixed right-0 bg-yellow-200 rounded-full opacity-30 top-10 h-72 w-72 blur-3xl filter md:h-96 md:w-96"></div>
            <div className={`fixed top-96 right-20 h-72 w-72 md:h-96  md:w-96 bg-indigo-500 rounded-full  opacity-50 blur-3xl filter`}></div>
          </section>
          {children}
          <Theme />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
