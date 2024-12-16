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
         <div className="p-2">
            <p>Bem-vindo, {session.user.name}. Seu email é: {session.user.email}</p>
            <SigOutButton
               className={"bg-red-800 text-white w-20 h-8 rounded-md hover:bg-red-900 transition-all"}
            />
         </div>
      );
   };

   redirect('/login');
}