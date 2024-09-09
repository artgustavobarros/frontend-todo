import { api } from "@/lib/axios"
import { Category } from "./@types"

interface EditTaskRequest{
  id: string
  title: string
  content: string
  category: Category
}

export async function editTask({id, title, content, category}: EditTaskRequest){
  await api.patch(`/tasks/update/${id}`,{title, content, category})
}