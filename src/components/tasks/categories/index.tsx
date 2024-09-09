import { Category } from "@/api/@types"
import { fetchByTopics } from "@/api/fetch-tasks-by-topics"
import { SkeletonTasks } from "@/components/skeleton-tasks"
import { TaskLine } from "@/components/task-line"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export function ShowTasksByCategory(){

  const {params} = useParams<{params: Category}>()
  
  const {data: tasks, isLoading} = useQuery({
    queryKey:['todo-tasks', `category-${params}`], 
    queryFn: async() => {
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