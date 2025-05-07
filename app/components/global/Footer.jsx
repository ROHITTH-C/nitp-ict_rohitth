"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 md:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold  text-blue-100">Electronics and ICT Academy</h3>
            <span className="text-sm mb-5">-------------------------------------------------------</span>
            <p className="text-sm mb-2 mt-3">
              National Institute of Technology Patna
            </p>
            <p className="text-sm mb-2">
              Setup Under Scheme of Department of Electronics 
            </p>
            <p className="text-sm mb-2">and Information Technology</p>
            <p className="text-sm">
              Ministry of Communications and IT, Govt. of India
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-blue-100">Quick Links</h3>
            <span className="text-sm mb-5">-------------------------------------------------------</span>
            <ul className="space-y-1 text-sm mt-3">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/Institute/Introduction" className="hover:underline">About Institute</Link>
              </li>
              <li>
                <Link href="/States" className="hover:underline">States</Link>
              </li>
              <li>
                <Link href="/Committees/Ab" className="hover:underline">Advisory Board</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold text-blue-100">Reach Us</h3>
            <span className="text-sm mb-5">-------------------------------------------------------</span>
            <p className="text-sm mb-2 mt-3">
              <strong>Address:</strong> National Institute of Technology Patna, Ashok Rajpath, Patna - 800005, Bihar, India
            </p>
            <p className="text-sm mb-2">
              <strong>Email:</strong> info@nitp.ac.in
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +91-612-2371715
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-500 mt-6 pt-4 text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Electronics and ICT Academy NIT Patna. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              <a 
                href="https://www.nitp.ac.in/Webteam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline transition-colors duration-300 hover:text-blue-200 underline"
              >
                Developed & Maintained by WDC NIT Patna
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 