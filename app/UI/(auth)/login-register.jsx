'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { SubmitButton } from "../../components/submitButton";
import { useScreenLoginStyleStore } from "../../zustand/useScreenLoginStyleStore";
import { usePathname } from "next/navigation";
import register from "./_actions/register";
import login from "./_actions/login";


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
   // const { register, handleSubmit } = useForm();
   // function handleSignIn(data) {
   //    console.log(data)
   // }

   return (
      <>
         <h1 className="text-center absolute top-3 w-[95%]">Entrar | NextAuth</h1>
         <form
            action={login}
            // onSubmit={handleSubmit(handleSignIn)}
            className={`flex flex-col gap-2 mt-2 text-sm text-gray-600`}
         >
            <Input
               type="email"
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="email"
               // {...register('email')}
               placeholder="E-mail..."
               required={true}
               autoComplete="on"
            />
            <Input
               type="password"
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="password"
               // {...register('password')}
               placeholder="Senha..."
               required={true}
               autoComplete="on"
            />
            <SubmitButton
               className={`h-10 w-full outline-1 outline-blue-500  text-white rounded-md transition-all  bg-blue-800 hover:bg-blue-900`}
               value={`Entrar`}
            />
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
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="name"
               // {...register('name')}
               placeholder="Nome..."
               required={true}
               autoComplete="on"
            />
            <Input
               type="email"
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="email"
               // {...register('email')}
               placeholder="E-mail..."
               required={true}
               autoComplete="on"
            />
            <Input
               type="password"
               className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
               name="password"
               // {...register('password')}
               placeholder="Senha..."
               required={true}
               autoComplete="on"
            />
            <SubmitButton
               className={`h-10 w-full outline-1 outline-blue-500  text-white rounded-md transition-all bg-purple-900 hover:bg-purple-950`}
               value={`Criar conta`}
            />
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