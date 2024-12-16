import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "./lib/db";
import { compareSync } from "bcrypt-ts";
import { signInSchema } from "./lib/zod";


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

            if (!email || !password) {
               return null;
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
            const matches = compareSync(password, user.password ?? '');

            if (matches) {
               return {
                  id: user.id,
                  name: user.name,
                  email: user.email
               }
            }
         } catch (error) {

            return null;
         }


      }
   })]
})