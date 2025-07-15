import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-gray-100 text-gray-800 min-h-screen">  {/* Light gray background */}

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
