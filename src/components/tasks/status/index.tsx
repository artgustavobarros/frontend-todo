import { fetchByTopics } from "@/api/fetch-tasks-by-topics"
import { SkeletonTasks } from "@/components/skeleton-tasks"
import { TaskLine } from "@/components/task-line"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"


export function ShowTasksByStatus(){

  const {params} = useParams()
  
  const {data: tasks, isLoading} = useQuery({
    queryKey:['todo-tasks', `status-${params}`], 
    queryFn: async() => fetchByTopics({params, topics: 'status'}),
  })
  
  return (
    <>
      {
        isLoading && <SkeletonTasks/>
      }
      {
        !isLoading && tasks && tasks.map((task) => <TaskLine key={task.id} data={task}/>)
      }
    </>
  )
}