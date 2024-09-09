import { api } from "@/lib/axios"
import { FetchTasksListResponse } from "./@types"

interface FetchByTopicsRequest{
  topics: 'category' | 'status'
  params: 'green' | 'yellow' | 'red' | 'done' | 'undone'
}

export async function fetchByTopics({params, topics}:FetchByTopicsRequest){
  let response
  if(topics === 'status') {
    response = await api.get<FetchTasksListResponse>(`/tasks/status/${params}`)
    const {tasks} = response.data
    return tasks
  }
  if(topics === 'category') {
    response = await api.get<FetchTasksListResponse>(`/tasks/category/${params}`)
    const {tasks} = response.data
    return tasks
  }
}