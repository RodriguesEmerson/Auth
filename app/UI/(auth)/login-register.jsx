'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { Input } from "../../components/input";
import { SubmitButton } from "../../components/submitButton";
import { useScreenLoginStyleStore } from "../../zustand/useScreenLoginStyleStore";
import { usePathname, useSearchParams } from "next/navigation";
import register from "./_actions/register";
import login from "./_actions/login";
import { Spinner } from "../../components/spinner";
import { auth } from "../../../auth";

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
   const [loging, setLoging] = useState(false);
   const authStatus = {
      getAuthStatus: async () => {
         setLoging(true);
         const session = await auth();
         setLoging(false);
      }
   }

   //Criando função para mostrar 'loading' ao clicar em entrar

   return (
      <>
         <h1 className="text-center absolute top-3 w-[95%]">Entrar | NextAuth</h1>
         <form
            action={login}
            onSubmit={() => authStatus.getAuthStatus()}
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
               {loging
                  ? <div className="flex items-center justify-center gap-1 "><Spinner />Entrando</div>
                  : <p>Entrar</p>
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
   // const { register, handleSubmit } = useForm();
   // function handleSignIn(data) {
   //    console.log(data)
   // }

   return (
      <>
         <h1 className="text-center absolute top-3 w-[95%]">Criar conta | NextAuth</h1>
         <form
            action={register}
            className={`flex flex-col gap-2 mt-2 text-sm text-gray-600`}
         >
            <Input
               type="text"
               name="name"
               // {...register('name')}
               placeholder="Nome"
               required={true}
            />
            <Input
               type="email"
               name="email"
               // {...register('email')}
               placeholder="E-mail..."
               required={true}
            />
            <Input
               type="password"
               name="password"
               // {...register('password')}
               placeholder="Senha..."
               required={true}
            />
            <SubmitButton>
               <p>Criar conta</p>
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
