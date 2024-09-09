import { useAuth } from "@/context/auth/use-tasks";
import { GetByTopics } from "../get-by-topipcs";
import { SignOut } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { CreateNewTaskButton } from "../create-new-task-button";
import { useMutation } from "@tanstack/react-query";

export function Nav(){

  const {signOut} = useAuth()
  const navigate = useNavigate()

  const {mutateAsync: signOutFn} = useMutation({
    mutationFn: signOut,
    onSuccess(){
      navigate('/')
    }
  })

  function handleSignOut(){
    signOutFn()
    navigate('/')
  }

  function handleListAllTasks(){
    navigate('/')
  }

  return(
    <aside className="bg-bg-light h-screen p-10 flex flex-col gap-8 border-r border-border">
      <div>
        <button onClick={handleListAllTasks}>
          <span className="text-text-primary text-2xl font-bold mb-4 block">Todas as tarefas</span>
        </button>
        <span className="text-text-primary text-2xl font-bold mb-4 block">Categorias</span>
        <ul className="flex flex-col gap-2 items-start justify-start">
          <GetByTopics params="green" topics="category"/>
          <GetByTopics params="yellow" topics="category"/>
          <GetByTopics params="red" topics="category"/>
        </ul>
      </div>
      <div>
        <span className="text-text-primary text-2xl font-bold mb-4 block">Status</span>
        <ul className="flex flex-col gap-2 items-start justify-start">
          <GetByTopics params="done" topics="status"/>
          <GetByTopics params="undone" topics="status"/>
        </ul>
      </div>
      <CreateNewTaskButton/>
      <button 
        className="font-bold mb-4 text-primary-header rounded-md p-3 flex items-center justify-center gap-4 transition-all hover:opacity-90" 
        onClick={handleSignOut}
      >
        Sair
        <SignOut className="w-5 h-5"/>
      </button>
      </aside>
  )
}