// 'use client'

import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function Dashboard(){
   // const router = useRouter();
   // const { data: session, status } = useSession();
   const session = await auth();
   if (session) {
      return (
         <div>
            <p>Bem-vindo, {session.user.name}. Seu email é: {session.user.email}</p>
         </div>
      );
   };

   redirect('/login')
  
}