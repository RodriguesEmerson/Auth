'use client';

export const SubmitButton = ({children, ...props}) => {
   return(
      <button
         className={`h-10 w-full outline-1 outline-blue-500  text-white rounded-md transition-all  bg-blue-800 hover:bg-blue-900`}
         {...props}
      >
         {children}
      </button>
   )
}