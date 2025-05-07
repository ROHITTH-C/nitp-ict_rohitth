'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import { Suspense } from "react";

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

// This metadata is not used in client components
// For SEO purposes, you'd need to create a separate metadata.ts file
// or remove 'use client' directive and use export const metadata directly
const seoMetadata = {
  title: 'NIT Patna Electronics and ICT Academy',
  description: 'National Institute of Technology Patna - Electronics and ICT Academy website. Information about courses, programs, and educational resources.',
  keywords: 'NIT Patna, Electronics and ICT Academy, E-ICT, technology education, faculty development programs',
}

export default function RootLayout({ children }: RootLayoutProps) {
  // Set document title dynamically on client side
  if (typeof document !== 'undefined') {
    document.title = seoMetadata.title;
  }

  return (
    <html lang="en">
      <head>
        <meta name="description" content={seoMetadata.description} />
        <meta name="keywords" content={seoMetadata.keywords} />
      </head>
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

