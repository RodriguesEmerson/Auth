import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <section className="flex items-center justify-center h-[calc(100vh-64px)]">
         <div className=" w-[500px]">
            <p className="text-4xl font-bold">Estudos de autenticação de usuários com <strong>Auth.JS!</strong></p>
            <p className="text-gray-600 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <Link
               className="h-14 w-52 mt-4 text-white rounded-lg font-semibold text-center leading-[56px] bg-purple-900 block hover:shadow-xl hover:shadow-purple-300 transition-all duration-200"
               href={"/register"} 
               target="_self" 
               rel={"self"}
            >
               Criar conta
            </Link>
         </div>
         <div>
            <Image src={"/images/home-img.jpg"} width={400} height={400} placeholder="blur" blurDataURL="/images/home-img.jpg" alt="Auth image"/>
         </div>
      </section>
   );
}
