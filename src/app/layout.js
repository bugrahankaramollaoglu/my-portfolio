'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" className={geist.className}>
      <body className="bg-gray-100 text-gray-800 min-h-screen">
        {/* 🔝 Topbar */}
        <header className="sticky top-0 z-50 bg-black border-b shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-lg font-bold text-white">My Portfolio</h1>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex space-x-4 text-sm text-white">
              <a href="#about" className="hover:text-blue-400">About</a>
              <a href="#apps" className="hover:text-blue-400">Apps</a>
              <a href="#articles" className="hover:text-blue-400">Articles</a>
              <a href="#skills" className="hover:text-blue-400">Skills</a>
              <a href="#contact" className="hover:text-blue-400">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Nav */}
          {isOpen && (
            <nav className="sm:hidden px-4 pb-4 space-y-2 text-white text-sm bg-black">
              <a href="#about" className="block hover:text-blue-400">About</a>
              <a href="#apps" className="block hover:text-blue-400">Apps</a>
              <a href="#articles" className="block hover:text-blue-400">Articles</a>
              <a href="#skills" className="block hover:text-blue-400">Skills</a>
              <a href="#contact" className="block hover:text-blue-400">Contact</a>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto p-4">{children }</main>


        {/* Back to Top Button */}
        {showTopButton && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 p-4 text-xl rounded-full bg-white text-black shadow-lg hover:bg-gray-100 transition duration-300"
            aria-label="Back to top"
          >
            ↑
          </button>
        )}



        {/* Footer */}
        <footer className="p-4 text-center text-sm text-gray-500 border-t mt-10">
          © 2025 Buğrahan Karamollaoğlu. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
