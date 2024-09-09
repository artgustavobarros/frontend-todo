
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Status } from "../../../api/@types"
import { fetchByTopics } from "../../../api/fetch-tasks-by-topics"
import { SkeletonTasks } from "../../skeleton-tasks"
import { TaskLine } from "../../task-line"


export function ShowTasksByStatus(){

  const {params} = useParams<{params: Status}>()
  
  const {data: tasks, isLoading} = useQuery({
    queryKey:['todo-tasks', `status-${params}`], 
    queryFn: async() =>{
      if (params) return fetchByTopics({params, topics: 'category'})
    },
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