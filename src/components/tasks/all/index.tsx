import { Task } from "@/api/@types"
import { fetchTasksList } from "@/api/fetch-tasks"
import { SkeletonTasks } from "@/components/skeleton-tasks"
import { TaskLine } from "@/components/task-line"
import { useQuery } from "@tanstack/react-query"

export function ShowAllTasks(){

  const {data: tasks, isLoading } = useQuery<Task[]>({
    queryKey:['todo-tasks'], 
    queryFn: fetchTasksList
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