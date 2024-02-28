"use client";
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })
import {Toaster} from "react-hot-toast";
import Header from "@/components/layout/Header";

// export const metadata: Metadata = {
//   title: 'Easy Farm',
//   description: '',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className="scroll-smooth">
    <body className={roboto.className}>
      <main className=" mx-auto">
        <Providers>
          <Toaster />
          <Header />
          {children}
          <footer className="border-t p-8 text-center text-gray-500 mt-16">
            &copy; 2023 All rights reserved
          </footer>
        </Providers>
      </main>
    </body>
  </html>
  )
}
