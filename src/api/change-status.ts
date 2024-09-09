import { api } from "@/lib/axios"
import { Status } from "./@types"

interface ChangeStatusRequest{
  id: string
  status: Status
}

export async function changeStatus({id, status}: ChangeStatusRequest){
  await api.patch(`/tasks/update/${id}`,{status})
}