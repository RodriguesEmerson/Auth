import { PrismaClient } from "@prisma/client";

declare global {
   var prisma: PrismaClient | undefined;
}

//Se o prisma não exite em 'globalThis' (ou seja, é undefined), crie um novo PrismaClient
//Caso contrário, use o 'prisma' existente em 'globalThis'.
//Isso garante que apenas uma istancia do prisma seja criada.
const db = globalThis.prisma || new PrismaClient();

//Se não estivermos no ambiente de produção, atribua a isntância do PrismaCliente à 'globalThis.prisma'.
//OBS*: Isso é útil para desenvolvimento e testes, mas não é necessário em produção.
if(process.env.NODE_ENV !== 'production'){
   globalThis.prisma = db;
}

//Exporta a instância do PrismaClient para uso em outros arquivos.
export default db;