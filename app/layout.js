import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Auth",
  description: "Studying Next Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
         <header className="h-16  flex items-center justify-start px-3 w-full bg-gradient-to-r from-purple-900 to-blue-900 text-white font-semibold text-xl">
            <h2>NextAuth</h2>
         </header>
        {children}
      </body>
    </html>
  );
}
