import { Layout } from "@/components/layout";
import logo from "@/assets/logo.png"
import { TaskLine } from "@/components/Task-line";

export function Dashboard(){
  return(
    <Layout>
      <div className="h-screen w-screen px-28 overflow-hidden">
        <header className="bg-header h-20 px-5 py-3 w-full">
          <img src={logo}/>
        </header>
        <div className="grid grid-cols-[320px_1fr]">
          <nav className="bg-background h-screen p-10 flex flex-col gap-8 border-r border-border">
            <div>
              <span className="text-text-pattern text-2xl font-bold mb-4 block">Categorias</span>
              <ul className="space-y-2">
                <li className="text-text-pattern text-xl font-light">Verde</li>
                <li className="text-text-pattern text-xl font-light">Amarelo</li>
                <li className="text-text-pattern text-xl font-light">Vermelho</li>
              </ul>
            </div>
            <div>
              <span className="text-text-pattern text-2xl font-bold mb-4 block">Status</span>
              <ul className="space-y-2">
                <li className="text-text-pattern text-xl font-light">Finalizado</li>
                <li className="text-text-pattern text-xl font-light">Em progresso</li>
              </ul>
            </div>
            {/* {EDITAR COLOCAR COMO UM BOTÃO COM FUNDO ROSA DO HEADER, A COR BRANCA NA LETRA E UM SHADOW} */}
            <span className="text-text-pattern text-2xl font-bold mb-4 block">Nova tarefa</span>
          </nav>
          <section className="bg-white p-5">
            <TaskLine/>
          </section>
        </div>
      </div>
    </Layout>
  )
}