import { api } from "../lib/axios"
interface ResetPasswordRequest {
  email: string
  newPassword?: string
}

export async function resetPassword({email, newPassword}: ResetPasswordRequest){
  await api.patch('/users/update',{email, newPassword})
}