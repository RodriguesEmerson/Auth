import { LoginMain } from "./UI/(auth)/login-register-Box";

export default function Home() {
   return (
      <>
         <header className="h-16  flex items-center justify-start px-3 w-full bg-gradient-to-r from-purple-900 to-blue-900 text-white font-semibold text-xl">
            <h2>NextAuth</h2>
         </header>
         <LoginMain />
      </>
   );
}
