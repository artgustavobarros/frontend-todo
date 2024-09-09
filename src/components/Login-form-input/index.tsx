import {ComponentProps, forwardRef, LegacyRef } from "react";

type LoginFormInputProps = ComponentProps<'input'>

export const LoginFormInput = forwardRef(function InputForm(
  {...props}:LoginFormInputProps, 
  ref: LegacyRef<HTMLInputElement>
  ){  
      return(
      <div className="flex items-center justify-center w-80 h-16 bg-bg-light rounded-full">
        <input className="bg-transparent outline-none text-lg text-text-primary placeholder:text-lg placeholder:text-text-primary"
        {...props}
        ref={ref}
        />
      </div>)
  })

