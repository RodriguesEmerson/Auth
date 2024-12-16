'use client';
import { useState } from "react";
import { SignOutIcon } from "../../public/svg/signOutIcon"
import { signOut } from "next-auth/react";
import { Spinner } from "./spinner";
export function SigOutButton({ ...props }) {
   const [loading, setLoading] = useState(false);
   return (
      <button
         {...props}
         onClick={async () => { setLoading(true); await signOut() }}
      >
         {!loading
            ? <div className="flex flex-row items-center justify-center text-sm pr-1"><SignOutIcon /> Sair</div>
            : <div className="flex items-center justify-center"><Spinner /></div>
         }
      </button>
   )
}

