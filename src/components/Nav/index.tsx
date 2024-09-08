import { useTask } from "@/context/fetch-tasks/use-tasks";
import { GetByTopics } from "../GetByTopics";
import { AddNewTask } from "../New-task";

export function Nav(){

  const {fetchTasks} = useTask()

  function handleFetchAllTasks(){
    fetchTasks()
  }

  return(
    <nav className="bg-background h-screen p-10 flex flex-col gap-8 border-r border-border">
      <div>
        <button onClick={handleFetchAllTasks}>
          <span className="text-text-pattern text-2xl font-bold mb-4 block">Todas as tarefas</span>
        </button>
        <span className="text-text-pattern text-2xl font-bold mb-4 block">Categorias</span>
        <ul className="flex flex-col gap-2 items-start justify-start">
          <GetByTopics params="green" topics="category"/>
          <GetByTopics params="yellow" topics="category"/>
          <GetByTopics params="red" topics="category"/>
        </ul>
      </div>
      <div>
        <span className="text-text-pattern text-2xl font-bold mb-4 block">Status</span>
        <ul className="flex flex-col gap-2 items-start justify-start">
          <GetByTopics params="done" topics="status"/>
          <GetByTopics params="undone" topics="status"/>
        </ul>
      </div>
      <AddNewTask/>
      </nav>
  )
}