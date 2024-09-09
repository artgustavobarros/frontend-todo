import { fetchByTopics } from "@/api/fetch-tasks-by-topics"
import { TaskLine } from "@/components/task-line"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"


export function ShowTasksByCategory(){

  const {params} = useParams()
  
  const {data: tasks, isLoading} = useQuery({
    queryKey:['todo-tasks', `category-${params}`], 
    queryFn: async() => fetchByTopics({params, topics: 'category'}),
  })
  
  return (
    <>
      {
        isLoading && <p>Carregando...</p>
      }
      {
        !isLoading && tasks && tasks.map((task) => <TaskLine key={task.id} data={task}/>)
      }
    </>
  )
}