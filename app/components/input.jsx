'use client';

export const Input = ({...props}) => {
   return(
      <input 
         className={"h-10 w-full border border-gray-300 rounded-md px-2 outline-1 outline-blue-500"}
         autoComplete="on"
         {...props} 
      />
   )  
}