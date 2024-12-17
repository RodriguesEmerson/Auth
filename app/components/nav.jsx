'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import { useState } from "react";

export function Nav() {


   return (
      <nav>
         <ul className="flex flex-row gap-4 text-sm font-thin tracking-widest">
            <Li path="/" name="Home"/>
            <Li path="/precos" name="Preços"/>
            <Li path="/sobre" name="Sobre" />
         </ul>
      </nav>
   )
}

function Li({ path, name }) {
   const pathname = usePathname();
   const [hov, setHov] = useState(false);

   return (
      <li className="relative cursor-pointer">
         <Link href={path} target="_self" rel="self">
            <p onMouseEnter={() => setHov(true)} onMouseOut={() => setHov(false)}>{name}</p>
            <span className={`h-[1px] w-full block bg-white scale-0 transition-all 
                ${(hov || path === pathname) && "scale-110"}
            `}></span>
         </Link>
      </li>
   )
}