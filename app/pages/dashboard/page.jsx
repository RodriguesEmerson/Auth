import { useSession, signIn, signOut } from 'next-auth/react';

export const Dashboard = () => {
   const { data: session } = useSession();

   if (!session) {
      return (
         <div>
            <p>Você não está autenticado.</p>
            <button onClick={() => signIn()}>Entrar</button>
         </div>
      );
   }

   return (
      <div>
         <p>Bem-vindo, {session.user.name}</p>
         <button onClick={() => signOut()}>Sair</button>
      </div>
   )
}