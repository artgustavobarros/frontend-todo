import { Layout } from "@/components/layout";
import logo from "@/assets/logo.png";
import { Nav } from "@/components/Nav";
import { TaskList } from "@/components/TaskList";

export function Dashboard(){
  
  return(
    <Layout>
      <div className="h-screen w-screen px-28 overflow-hidden">
        <header className="bg-header h-20 px-5 py-3 w-full">
          <img src={logo}/>
        </header>
        <div className="grid grid-cols-[320px_1fr]">
          <Nav/>
          <section className="bg-white p-5 flex flex-col gap-4">
          <TaskList/>
          </section>
        </div>
      </div>
    </Layout>
  )
}