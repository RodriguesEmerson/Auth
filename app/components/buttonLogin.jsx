'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ButtonLogin() {
   const pathname = usePathname();
   if(pathname !== "/") return <></>;
   return (
      <Link href="/login" target="_self" className=" text-center leading-10 w-24 h-10 rounded-2xl border border-white text-sm 
         hover:bg-white hover:text-purple-900 transition-all">
         Entrar
      </Link>
   )
}