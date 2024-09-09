import { api } from "@/utils/axios";

export async function deleteTask(id: string){
  await api.delete(`/tasks/delete/${id}`)
}