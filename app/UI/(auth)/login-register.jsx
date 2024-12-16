'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../../components/input";
import { SubmitButton } from "../../components/submitButton";
import { useScreenLoginStyleStore } from "../../zustand/useScreenLoginStyleStore";
import { usePathname } from "next/navigation";
import login from "./_actions/login";
import { Spinner } from "../../components/spinner";
import register from "./_actions/register";

export const LoginBox = () => {
   const style = useScreenLoginStyleStore((state) => state.style);
   const setStyle = useScreenLoginStyleStore((state) => state.setStyle);
   const pathname = usePathname();

   useEffect(() => {
      setStyle(pathname.slice(1,));
   }, [pathname]);

   return (
      <section
         className={`relative transition-all duration-300 z-10 flex flex-col justify-center items-stretch  h-[400px] w-80 rounded-md p-2 shadow-[2px_2px_20px_rgba(0,0,0,0.1)] bg-white
            ${style === "login" ? "left-[50%]" : "left-0"}
         `}
      >
         {pathname === "/login" && <Login />}
         {pathname === "/register" && <Register />}
      </section>
   )
}

function Login() {
   const [loading, setLoading] = useState(false);
   const [loginError, setLoginError] = useState(false);

   const actionLogin = {

      //Dessa forma eu consigo tratar melhor o erro e o loading.
      doLogin: async function(e) {
         e.preventDefault();  
         const formData = new FormData(e.target);

         setLoading(true);
         setLoginError(false);
         const response = await login(formData)
         setLoading(false);

         if(!response)  setLoginError(true);
      }
   }
 
   return (
      <>
         <h1 className="text-center absolute top-3 w-[95%]">Entrar | NextAuth</h1>
         {loginError &&
            <p className="text-sm font-extralight text-red-800 text-center">Email ou senha inválidos. Tente novamente!</p>
         }
         <form
            onSubmit={(e)=>actionLogin.doLogin(e)}
            className={`flex flex-col gap-2 mt-2 text-sm text-gray-600`}
         >
            <Input
               type="email"
               name="email"
               placeholder="E-mail"
               required={true}
            />
            <Input
               type="password"
               name="password"
               placeholder="Senha"
               required={true}
            />

            <SubmitButton>
               {!loading
                  ? <p>Entrar</p>
                  : <div className="flex items-center justify-center gap-1 "><Spinner />Entrando</div>
               }
            </SubmitButton>

         </form>

         <div className="mx-auto mt-3">
            <Link
               href={"#"}
               className="underline text-blue-800 text-xs"
            >
               Recuperar senha
            </Link>
            <span className="mx-2 text-blue-800">|</span>

            <Link
               href={`/register`}
               className="mx-auto mt-3 underline text-blue-800 text-xs"
            >
               Criar conta
            </Link>
         </div>
      </>
   )
}

function Register() {
   const [loading, setLoading] = useState(false);
   const [emailExist, setEmailExist] = useState(false);
   
   //Dessa forma eu consigo tratar melhor o erro e o loading.
   const actionRegiter = {

      doRegistration: async function(e) {
         e.preventDefault();  
         const formData = new FormData(e.target);

         setLoading(true);
         setEmailExist(false);
         const response = await register(formData);
         setLoading(false);

         if(response?.error) setEmailExist(response.message);
         if(!response) setEmailExist("A senha precisa ter entre 8 e 32 catacteres.")
      }
   }

   return (
      <>
         <h1 className="text-center absolute top-3 w-[95%]">Criar conta | NextAuth</h1>
         {emailExist &&
            <p className="text-sm font-extralight text-red-800 text-center">{emailExist}</p>
         }
         <form
            onSubmit={(e)=> actionRegiter.doRegistration(e)}
            className={`flex flex-col gap-2 mt-2 text-sm text-gray-600`}
         >
            <Input
               type="text"
               name="name"
               placeholder="Nome"
               required={true}
            />
            <Input
               type="email"
               name="email"
               placeholder="E-mail..."
               required={true}
            />
            <Input
               type="password"
               name="password"
               placeholder="Senha..."
               required={true}
            />
            <SubmitButton>
               {!loading
                  ? <p>Criar conta</p>
                  : <div className="flex items-center justify-center gap-1 "><Spinner />Criando conta</div>
               }
            </SubmitButton>

         </form>

         <div className="mx-auto mt-3 flex flex-row gap-1">

            <p className="text-xs">Já tem uma conta?</p>
            <Link
               href={`/login`}
               className="mx-auto underline text-blue-800 text-xs"
            >
               Fazer Login
            </Link>
         </div>
      </>
   )
}
