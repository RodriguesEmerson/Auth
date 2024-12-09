import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; //Credentials

const nextAuthOptions = {
   providers: [
      //Provider com backend próprio
      CredentialsProvider({
         name: 'credentials',
         credentials: {
            email: {label: 'email', type: 'text'},
            password: {label: 'password', type: 'password'}
         }
      })
   ]
}