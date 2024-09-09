import { api } from "@/utils/axios";
import { Category } from "./@types";

interface RegisterTaskRequest{
  title: string
  content: string
  category: Category
}

export async function registerTask({title, content, category}:RegisterTaskRequest){
  await api.post('/tasks', {title, content, category})
}