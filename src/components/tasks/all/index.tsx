import { Task } from "@/api/@types"
import { fetchTasksList } from "@/api/fetch-tasks"
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
        isLoading && <p>Carregando...</p>
      }
      {
        !isLoading && tasks && tasks.map((task) => <TaskLine key={task.id} data={task}/>)
      }
    </>
  )
}