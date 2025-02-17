import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Nav } from "../app/components/nav"
import { ButtonLogin } from "../app/components/buttonLogin"
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
            <SessionProvider >
               <header className="h-16  flex items-center justify-around px-3 w-full bg-gradient-to-r from-purple-900 to-blue-900 text-white font-semibold text-xl">
                  <h2>NextAuth</h2>
                  <Nav />
                  <ButtonLogin />
               </header>
               {children}
            </SessionProvider>
         </body>
      </html>
   );
}
