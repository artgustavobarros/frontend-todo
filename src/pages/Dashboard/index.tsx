import { Layout } from "@/components/layout";
import logo from "@/assets/logo.png";
import { Nav } from "@/components/nav";
import { Outlet } from "react-router-dom";

export function Dashboard(){
  
  return(
    <Layout>
      <div className="h-screen w-screen px-28 overflow-hidden scrollbar-thumb-header scrollbar-track-transparent">
        <header className="bg-header h-20 px-5 py-3 w-full">
          <img src={logo}/>
        </header>
        <div className="grid grid-cols-[320px_1fr]">
          <Nav/>
          <section className="bg-white p-5 flex flex-col gap-4 h-screen overflow-y-scroll scrollbar-thin ">
          <Outlet/>
          </section>
        </div>
      </div>
    </Layout>
  )
}