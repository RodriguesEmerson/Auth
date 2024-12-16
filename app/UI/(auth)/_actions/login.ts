'use server';

import { AuthError } from "next-auth";
import { signIn } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function login({email, password}){
                                  //FormData:FormData  
   // const {email, password} = Object.fromEntries(FormData.entries());
   try{
      await signIn('credentials', {email, password}); 
   }catch(e){
      if(e instanceof AuthError){
         if(e.type === 'CredentialsSignin'){
            return null;
         }
      }  
   }
   
   redirect('/dashboard');
}