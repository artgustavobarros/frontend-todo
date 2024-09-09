import { api } from "@/lib/axios";


interface ResetPasswordRequest {
  newPassword?: string
}

export async function resetPassword({newPassword}: ResetPasswordRequest){
  await api.patch('/users/update',{newPassword})
}