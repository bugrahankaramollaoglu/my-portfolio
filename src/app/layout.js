import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-gray-100 text-gray-800 min-h-screen">  {/* Light gray background */}
        {/* 🔝 Topbar */}
        <header className="sticky top-0 z-50 bg-black border-b shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-lg font-bold">My Portfolio Website</h1>
            <nav className="space-x-4 text-sm">
              <a href="#about" className="hover:text-blue-500">About</a>
              <a href="#apps" className="hover:text-blue-500">Apps</a>
              <a href="#articles" className="hover:text-blue-500">Articles</a>
              <a href="#skills" className="hover:text-blue-500">Skills</a>
              <a href="#contact" className="hover:text-blue-500">Contact</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
        <footer className="p-4 text-center text-sm text-gray-500 border-t mt-10">
          © 2025 Buğrahan Karamollaoğlu. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
