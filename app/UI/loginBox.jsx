'use client'
import Link from "next/link"
import { Input } from "../components/input"
import { SubmitButton } from "../components/submitButton"
import { useEffect, useState } from "react"
import { useScreenLoginStyleStore } from "../zustand/useScreenLoginStyleStore"

export const LoginBox = () => {

   const style = useScreenLoginStyleStore((state) => state.style);
   const setStyle = useScreenLoginStyleStore((state) => state.setStyle);

   const [boxInfos, setBoxInfos] = useState();
   useEffect(() => {
      style === "login" && setBoxInfos({title: "Login Auth", actionLink: {title: "Criar conta", link: "#"}, buttonValue: "Login"});
      style === "create" && setBoxInfos({title: "Criar conta Auth", actionLink: {title: "Fazer login", link: "#"}, buttonValue:"Criar conta"});
   },[style])

   return (
      <section
         className={`relative transition-all duration-300 z-10 flex flex-col justify-center items-stretch  h-[400px] w-80 rounded-md p-2 shadow-[2px_2px_20px_rgba(0,0,0,0.1)] bg-white
            ${style === "login" ? "left-[50%]" : "left-0"}
         `}
      >
         <h1 className="text-center absolute top-3 w-[95%]">{boxInfos?.title}</h1>
         <form
            action=""
            className={`flex flex-col gap-2 mt-2 text-sm text-gray-600`}
         >
            <Input
               type="text"
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="user"
               placeholder="E-mail..."
            />
            <Input
               type="password"
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="password"
               placeholder="Senha..."
            />
            <SubmitButton
               className={`h-10 w-full outline-1 outline-blue-500  text-white rounded-md transition-all 
                  ${style === "login" ? "bg-blue-800 hover:bg-blue-900" : "bg-purple-900 hover:bg-purple-950"}
               `}
               value={`${boxInfos?.buttonValue}`}
            />
         </form>
         <div className="mx-auto mt-3">
            {style === "login" &&
               <>
                  <Link
                     href={"#"}
                     className="underline text-blue-800 text-xs"
                  >
                     Recuperar senha
                  </Link>
                  <span className="mx-2 text-blue-800">|</span>
               </>
            }

            <Link
               href={`${boxInfos?.actionLink.link}`}
               className="mx-auto mt-3 underline text-blue-800 text-xs"
               onClick={(e) => {
                  e.preventDefault(); 
                  setStyle(style === "login" ? "create" : "login");
               }}
            >
               {boxInfos?.actionLink.title}
            </Link>
         </div>
      </section>
   )
}