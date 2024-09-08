import { fetchByTopics } from "@/api/fetch-tasks-by-topics"
import { useTask } from "@/context/fetch-tasks/use-tasks"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

interface GetByTopicsProps{
  topics: 'category' | 'status'
  params: 'green' | 'yellow' | 'red' | 'done' | 'undone'
}

const paramsMapper = {
  'green': 'Verde',
  'yellow': 'Amarelo',
  'red': 'Vermelho',
  'done': 'Finalizado',
  'undone': 'Em progresso'
  }

export function GetByTopics({topics,params}: GetByTopicsProps){

  const {handleSetTasks} = useTask()
  const [enabled, setEnabled] = useState(false)

  const {data: tasks, isLoading} = useQuery({
    queryKey:['todo-tasks', `${topics}-${params}`], 
    queryFn: async() => fetchByTopics({params, topics}),
    enabled
  })

  function handleFetchTasksList(){
    setEnabled(true)
  }

  useEffect(() =>{
    if(!isLoading && tasks){
      handleSetTasks(tasks!)
    }
  },[])
  
  return(
    <button onClick={handleFetchTasksList}>
      <li className="text-text-pattern text-xl font-light">{paramsMapper[params]}</li>
    </button>
  )
}