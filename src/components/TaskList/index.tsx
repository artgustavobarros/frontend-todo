import { Task } from "@/api/@types"
import { fetchTasksList } from "@/api/fetch-tasks"
import { useTask } from "@/context/fetch-tasks/use-tasks"
import { useQuery } from "@tanstack/react-query"
import { TaskLine } from "../Task-line"
import { useEffect } from "react"

export function TaskList(){

  const {tasks: dataTasks, handleSetTasks} = useTask()

  const {data: tasks, isLoading } = useQuery<Task[]>({
    queryKey:['todo-tasks'], 
    queryFn: fetchTasksList
  })
  
  useEffect(() =>{
    if (!isLoading && tasks){
      handleSetTasks(tasks!)
    }
  },[handleSetTasks, isLoading, tasks])
  
  return (
    <>
      {
        isLoading && <p>Carregando...</p>
      }
      {
        !isLoading && dataTasks && dataTasks.map((task) => <TaskLine key={task.id} data={task}/>)
      }
    </>
  )
}