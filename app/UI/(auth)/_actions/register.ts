'use server';

import db from "../../../../lib/db";

//As funções de servidor devem ser assíncronas;
export default async function register(FormData: FormData){
   const name = FormData.get('name') as string;
   const email = FormData.get('email') as string;
   const password = FormData.get('password') as string;

   //Aqui seria bom usar o Zod.
   if(!name || !email || !password){
      throw new Error ("Todos os devem estar preenchidos.")
   }

   await db.user.create({
      data:{
         name: name,
         email: email,
         password: password
      }
   })
}