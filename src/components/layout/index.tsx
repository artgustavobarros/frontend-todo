import { ReactNode } from "react";

export function Layout({children}:{children: ReactNode}){
  return(
    <div className="lg:bg-wood-pattern lg:w-screen lg:h-screen lg:bg-contain lg:grid lg:place-content-center">{children}</div>
  )
}