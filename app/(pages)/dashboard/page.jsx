// 'use client'

import { redirect } from "next/navigation";
import { auth } from "../../../auth";

import { SigOutButton } from "../../components/signOutButton"

export default async function Dashboard() {
   // const router = useRouter();
   // const { data: session, status } = useSession();
   const session = await auth();
   if (session) {
      return (
         <section className="p-2 h-svh bg-gray-200 w-full flex flex-row gap-2">
            <aside className="relative w-60 h-[90%] bg-white shadow-xl rounded-md border border-gray-100 p-1 pt-3">
               <div className="flex flex-row gap-1 items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-gray-600">
                  </div>
                  <div className="flex flex-col">
                     <p>Olá, {session.user.name}.</p>
                     <p className="text-xs -mt-1">{session.user.email}</p>
                  </div>
               </div>
               <SigOutButton
                  className={"absolute  bottom-2 left-[90px] bg-gradient-to-l from-purple-900 to-blue-900 text-white w-14 h-10 rounded-full hover:text-gray-300 transition-all"}
               />
            </aside>
            <div className="flex items-center justify-center bg-white shadow-xl rounded-md border border-gray-100 w-[85%] h-[calc(100vh-87px)]">
               <p className="text-3xl font-bold text-gray-600">DashBoard.</p>
            </div>

         </section>
      );
   };

   redirect('/login');
}