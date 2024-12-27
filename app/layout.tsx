// 'use client';

// import "./globals.css";
// import Navbar from "./components/global/Navbar.jsx";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }
'use client';
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/global/Navbar";
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
        <Navbar />
        <Suspense >
          <ProgressBar
            height="4px"
            color="#ff6549"
            options={{ showSpinner: true }}
            shallowRouting
          />
          {children}
        </Suspense>

      </body>
    </html>
  );
}

