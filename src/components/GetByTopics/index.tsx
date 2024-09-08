import { useTask } from "@/context/fetch-tasks/use-tasks"

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
  const{fetchByTopics} = useTask()

  function handleFetchTasks(){
    fetchByTopics({params, topics})
  }
  
  return(
    <button onClick={handleFetchTasks}>
      <li className="text-text-pattern text-xl font-light">{paramsMapper[params]}</li>
    </button>
  )
}