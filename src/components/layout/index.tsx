import { ReactNode } from "react";

export function Layout({children}:{children: ReactNode}){
  return(
    <div className="bg-hero-pattern w-screen h-screen bg-contain grid place-content-center">{children}</div>
  )
}