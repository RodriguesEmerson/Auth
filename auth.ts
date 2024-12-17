import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "./lib/db";
import { compareSync, compare } from "bcrypt-ts";
import { signInSchema } from "./lib/zod";
import { ZodError } from "zod";


export const { handlers: { GET, POST }, auth, signIn } = NextAuth({
   // pages:{
   //    signIn: '/login',
   //    signOut: 'logout'
   // },
   providers: [Credentials({
      credentials: {
         email: {},
         password: {}
      },
      async authorize(credentials) {

         try {
            //Valida as credenciasi com Zod.
            const { email, password } = await signInSchema.parseAsync(credentials);
            console.log(email, password)

            if (!email || !password) {
               throw new Error("Dados inválidos");
            }

            const user = await db.user.findUnique({
               where: {
                  email: email
               }
            })
            if (!user) {
               return null;
            }

            //Compara a senha do input com a do DB.
            const matches = await compare(password, user.password ?? '');

            if (matches) {
               return {
                  id: user.id,
                  name: user.name,
                  email: user.email
               }
            }

            return null;
         } catch (error) {
            console.log(error)
            return null;
         }
      }
   })],
   session:{
      strategy: "jwt", //Token JWT.
      maxAge: 1 * 24 * 60 * 60, //Sessão válida por 1 dia.
   },
})