
import { useQuery } from "@tanstack/react-query"
import { Task } from "../../../api/@types"
import { fetchTasksList } from "../../../api/fetch-tasks"
import { SkeletonTasks } from "../../skeleton-tasks"
import { TaskLine } from "../../task-line"

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