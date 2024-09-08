import { api } from "@/utils/axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Category, Status } from "./types";

export interface Task {
  id: string
  authorId: string
  category: Category
  status: Status
  title: string
  content: string
  slug: string
  createdAt: string
  updatedAt: string
}

interface SignInRequest{
  email: string
  password: string
}

interface SignInResponse{
  access_token: string
}

interface FetchTasksResponse{
  tasks: Task[]
}

interface CreateTaskRequest{
  title: string,
  content: string,
  category: Category
}

interface EditTaskRequest{
  id: string
  title?:string
  content?:string
  category?: Category
}

interface EditStatusRequest{
  id: string
  status: Status
}
interface FetchByTopicsRequest{
  topics: 'category' | 'status'
  params: 'green' | 'yellow' | 'red' | 'done' | 'undone'
}

export interface TasksContextProps{
  tasks: Task[]
  handleSetTasks:(tasks: Task[]) => Promise<void>
  signIn: ({email, password}: SignInRequest) => Promise<void>
  fetchTasks: () => Promise<void>
  getTaskDetails: (id: string) => Promise<Task>
  createNewTask:({title,content, category}: CreateTaskRequest) => Promise<void>
  deleteTask:(id: string) => Promise<void>
  editStatus:({id, status}:EditStatusRequest) => Promise<void>
  editTask: ({id,title,content,  category}:EditTaskRequest) => Promise<void>
  fetchByTopics: ({params, topics}:FetchByTopicsRequest) => Promise<void>
}

export const TasksContext = createContext({})

export function TasksProvider ({children}: {children: ReactNode}){

  const [, SetAuth] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleSetTasks(tasks: Task[]){
    setTasks(tasks)
  }

  async function signIn({email, password}: SignInRequest){
    try{
      const response = await api.post<SignInResponse>('/sessions', {email, password})
      const {access_token: accessToken} = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

      localStorage.setItem('access_token',accessToken )
      SetAuth(accessToken)
    }catch(err){
      if(err instanceof Error){
        console.log(err)
      }
    }
  }

  async function fetchTasks(){
    try{
      const response = await api.get<FetchTasksResponse>('/tasks')
      const {tasks} = response.data
      setTasks(tasks)
    }catch(err){
      if(err instanceof Error){
        console.log(err)
      }
    }
  }

  async function getTaskDetails(id: string): Promise<Task>{
    const response = await api.get(`/tasks/${id}`)
    return response.data.task
  }

  async function createNewTask({title,content,category}: CreateTaskRequest): Promise<void>{
    await api.post('/tasks',{title, content, category})
  }

  async function deleteTask(id: string):Promise<void>{
    await api.delete(`/tasks/delete/${id}`)
  }

  async function editTask({id,title,content, category}:EditTaskRequest){
    await api.patch(`/tasks/update/${id}`,{title, content, category})
  }

  async function editStatus({id, status}:EditStatusRequest){
    await api.patch(`/tasks/update/${id}`,{status})
  }

  async function fetchByTopics({params, topics}:FetchByTopicsRequest){
    let response
    if(topics === 'status') {
      response = await api.get<FetchTasksResponse>(`/tasks/status/${params}`)
      const {tasks} = response.data
      setTasks(tasks)
    }
    if(topics === 'category') {
      response = await api.get<FetchTasksResponse>(`/tasks/category/${params}`)
      const {tasks} = response.data
      setTasks(tasks)
    }
  }

  useEffect(() =>{
    const accessToken = localStorage.getItem('access_token')

    if(accessToken){
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
  },[])

  return(
    <TasksContext.Provider value={
        {
          tasks,
          handleSetTasks, 
          signIn, 
          fetchTasks, 
          getTaskDetails, 
          createNewTask, 
          deleteTask,
          editTask,
          editStatus,
          fetchByTopics
        }
      }>
      {children}
    </TasksContext.Provider>
  )
}
