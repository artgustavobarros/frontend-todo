import { api } from "../lib/axios"
import { FetchTasksListResponse, Task } from "./@types"

export async function fetchTasksList(): Promise<Task[]>{ 
  const response = await api.get<FetchTasksListResponse>('/tasks')
  return response.data.tasks
}