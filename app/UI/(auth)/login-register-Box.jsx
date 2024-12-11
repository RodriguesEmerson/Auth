'use client'
import Image from "next/image"
import { useScreenLoginStyleStore } from "../../zustand/useScreenLoginStyleStore"
import { LoginBox } from "./login-register"

export const LoginMain = () => {

   const style = useScreenLoginStyleStore((state) => state.style);

   return ( 
      <main
         className={`flex items-center justify-center min-h-[calc(100vh-64px)] bg-white `}
      >
         <div className="relative w-[40%] ">
            <Image 
               className={`absolute transition-all duration-400 ease-in-out 
                  ${style === "login" ? "-left-16" : "left-[50%]"}
               `}
               src={`/images/${style === "login" ? "login-img.jpg" : "create-img.jpg"}`} 
               width={400} 
               height={400} alt="login img" 
               placeholder="blur" 
               blurDataURL="/images/login-img.jpg" 
            />
            <LoginBox />
         </div>
         <div
            className={`absolute transition-all duration-[700ms] ease-in-out h-[85vw] w-[90vw] rounded-full bg-gradient-to-r from-blue-500 to-blue-900 -bottom-[45vw]
               ${style === "login" ? "left-[50%]  bg-gradient-to-r from-blue-900 to-blue-500" : "-left-[40%] bg-gradient-to-r from-violet-800 to-purple-950"}  
            `}
         >
         </div>
      </main >
   )
}