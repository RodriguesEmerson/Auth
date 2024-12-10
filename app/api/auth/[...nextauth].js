import NextAuth from "next-auth";
import { signIn } from "next-auth/react";
// import CredentialsProvider from "next-auth/providers/credentials"; //Credentials

const nextAuthOptions = {
   providers: [
      //Provider com backend próprio
      // CredentialsProvider({
      //    name: 'credentials',
      //    credentials: {
      //       email: {label: 'email', type: 'text'},
      //       password: {label: 'password', type: 'password'}
      //    }
      // }),
      GithubProvider({
         clientId: process.env.GITHUB_ID,
         clientSecret: process.env.GITHUB_SECRET,
      }),
   ],
   // Configurações adicionais, como callbacks e páginas personalizadas
  callbacks: {
   async session({ session, token }) {
     session.user.id = token.sub; // Adiciona o ID do usuário à sessão
     return session;
   },
   pages: {
      signIn: '/app/'
   }
 },
}
export default NextAuth(authOptions);