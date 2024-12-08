'use client';

export const SubmitButton = ({...props}) => {
   return(
      <button {...props}>
         {props.value}
      </button>
   )
}