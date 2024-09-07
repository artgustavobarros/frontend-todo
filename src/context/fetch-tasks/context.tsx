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

export interface TasksContextProps{
  tasks: Task[]
  signIn: ({email, password}: SignInRequest) => Promise<void>
  fetchTasks: () => Promise<void>
  getTaskDetails: (id: string) => Promise<Task>
}

export const TasksContext = createContext({})

export function TasksProvider ({children}: {children: ReactNode}){

  const [auth, SetAuth] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

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

  useEffect(() =>{
    const accessToken = localStorage.getItem('access_token')

    if(accessToken){
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
  },[])

  return(
    <TasksContext.Provider value={{tasks, signIn, fetchTasks, getTaskDetails}}>
      {children}
    </TasksContext.Provider>
  )
}
