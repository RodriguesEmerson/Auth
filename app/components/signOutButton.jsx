'use client';
import { signOut } from "next-auth/react";
export function SigOutButton({...props}){
   return(
      <button
      {...props}
      onClick={async () => {await signOut()}}
   >Sair</button>
   )
}

