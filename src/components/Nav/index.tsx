import { useTask } from "@/context/fetch-tasks/use-tasks";
import { GetByTopics } from "../GetByTopics";
import { AddNewTask } from "../New-task";
import { SignOut } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function Nav(){

  const {fetchTasks, signOut} = useTask()
  const navigate = useNavigate()


  function handleSignOut(){
    signOut()
    navigate('/')
  }

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
      <button 
        className="font-bold mb-4 text-header rounded-md p-3 flex items-center justify-center gap-4" 
        onClick={handleSignOut}
      >
        Sair
        <SignOut className="w-5 h-5"/>
      </button>
      </nav>
  )
}