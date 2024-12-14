
export default function Dashboard(){
   const session = {user: {name:"Emerson"}};
   if (!session) {
      return (
         <div>
            <p>Você não está autenticado.</p>
         </div>
      );
   }

   return (
      <div>
         <p>Bem-vindo, {session.user.name}</p>
      </div>
   )
}