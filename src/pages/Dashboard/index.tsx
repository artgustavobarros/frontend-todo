import { Layout } from "@/components/layout";
import logo from "@/assets/logo.png";
import { Nav } from "@/components/Nav";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/utils/axios";
import { TaskLine } from "@/components/Task-line";
import { Task } from "@/context/fetch-tasks/context";
import { useTask } from "@/context/fetch-tasks/use-tasks";

interface FetchTasksListResponse{
  tasks: Task[]
}

export function Dashboard(){

  const {tasks: dataTasks, handleSetTasks} = useTask()

  const {data: tasks, isLoading } = useQuery<Task[]>({
    queryKey:['todo-tasks'], 
    queryFn: async () => { 
      const response = await api.get<FetchTasksListResponse>('/tasks')
      return response.data.tasks
    }
  })

  handleSetTasks(tasks!)

  return(
    <Layout>
      <div className="h-screen w-screen px-28 overflow-hidden">
        <header className="bg-header h-20 px-5 py-3 w-full">
          <img src={logo}/>
        </header>
        <div className="grid grid-cols-[320px_1fr]">
          <Nav/>
          <section className="bg-white p-5 flex flex-col gap-4">
            {
              isLoading && <p>Carregando...</p>
            }
            {
              !isLoading && dataTasks && dataTasks.map((task) => <TaskLine key={task.id} data={task}/>)
            }
          </section>
        </div>
      </div>
    </Layout>
  )
}