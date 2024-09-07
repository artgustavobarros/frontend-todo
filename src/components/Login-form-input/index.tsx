import {ComponentProps, forwardRef, LegacyRef } from "react";

type LoginFormInputProps = ComponentProps<'input'>

export const LoginFormInput = forwardRef(function InputForm(
  {...props}:LoginFormInputProps, 
  ref: LegacyRef<HTMLInputElement>
  ){  
      return(
      <div className="flex items-center justify-center w-80 h-16 bg-background rounded-full">
        <input className="bg-transparent outline-none text-lg text-text-pattern placeholder:text-lg placeholder:text-text-pattern"
        {...props}
        ref={ref}
        />
      </div>)
  })

