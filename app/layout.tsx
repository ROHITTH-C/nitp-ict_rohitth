'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Suspense } from "react";


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <div className="flex flex-col min-h-screen">
          <div className="relative z-50">
            <Navbar />
          </div>
          <main className="flex-grow relative z-10 px-2 md:px-5 py-5">
            <Suspense>
              <ProgressBar
                height="4px"
                color="#ff6549"
                options={{ showSpinner: true }}
                shallowRouting
              />
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

