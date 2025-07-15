import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-gray-100 text-gray-800 min-h-screen">  {/* Light gray background */}
        <header className="p-4 shadow-md">
          <nav className="max-w-4xl mx-auto flex justify-between">
            <div className="font-bold text-xl">MyPortfolio</div>
            <ul className="flex space-x-4">
              <li><a href="#apps" className="hover:text-blue-500">Apps</a></li>
              <li><a href="#articles" className="hover:text-blue-500">Articles</a></li>
              <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>

        <footer className="p-4 text-center text-sm text-gray-500 border-t mt-10">
          © 2025 My Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
