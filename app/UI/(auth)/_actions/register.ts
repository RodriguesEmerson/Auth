
//Esse arquivo precisa ser declarado com 'use server' já que vai ser exposto ao 'use client'.
'use server';

import { redirect } from "next/navigation";
import db from "../../../../lib/db";
import { hashSync } from "bcrypt-ts"; 

//As funções de servidor devem ser assíncronas;
export default async function register(FormData: FormData){
   const name = FormData.get('name') as string;
   const email = FormData.get('email') as string;
   const password = FormData.get('password') as string;

   //Aqui seria bom usar o Zod.
   if(!name || !email || !password){
      throw new Error ("Todos os devem estar preenchidos.")
   }

   //Verifica se o e-mail já existe na DB.
   const user = await db.user.findUnique({
      where:{
         email: email
      }
   })
   if(user){
      throw new Error("Já existe um usuário com este e-amail!");
   }

   //Cria o novo usuário no DB.
   await db.user.create({
      data:{
         name: name,
         email: email,
         password: hashSync(password, 10) //criptografa a senha!
      }
   });

   redirect("/dashboard")
}