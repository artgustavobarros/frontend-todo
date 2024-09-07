import { MagnifyingGlass } from "@phosphor-icons/react";
import {ComponentProps, forwardRef, LegacyRef } from "react";

type SearchInputProps = ComponentProps<'input'>

export const SearchInput = forwardRef(function InputForm(
  {...props}:SearchInputProps, 
  ref: LegacyRef<HTMLInputElement>
  ){  
      return(
      <div className="flex items-center justify-center w-80 h-16 bg-background rounded-full">
        <input className="bg-transparent outline-none text-lg text-text-pattern placeholder:text-lg placeholder:text-text-pattern"
        {...props}
        ref={ref}
        />
        <MagnifyingGlass/>
      </div>)
  })
