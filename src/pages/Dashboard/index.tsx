import { Layout } from "@/components/layout";
import logo from "@/assets/logo.png";
import { Nav } from "@/components/nav";
import { Outlet } from "react-router-dom";
import { DialogHamburguer } from "@/components/dialog-hamburguer";

export function Dashboard(){
  
  return(
    <Layout>
      <div className="h-screen w-screen lg:px-28 overflow-hidden scrollbar-thumb-primary-header scrollbar-track-transparent">
        <header className="bg-primary-header flex items-center md:justify-start justify-between md:px-12 py-2 px-4">
          <img src={logo} className="animate-moveInRight"/>
          <DialogHamburguer/>
        </header>
        <div className="md:grid md:grid-cols-[335px_1fr]">
          <div className="md:block hidden">
            <Nav/>
          </div>
          <section className="bg-white px-4 md:px-10 py-5 flex flex-col gap-4 h-screen overflow-y-scroll scrollbar-thin ">
          <Outlet/>
          </section>
        </div>
      </div>
    </Layout>
  )
}