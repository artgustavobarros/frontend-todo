import { api } from "@/lib/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface SignInRequest{
  email: string
  password: string
}

interface SignInResponse{
  access_token: string
}

export interface AuthContextProps{
  auth: string
  signIn: ({email, password}: SignInRequest) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext({})

export function AuthProvider ({children}: {children: ReactNode}){

  const [auth, setAuth] = useState('')


  async function signIn({email, password}: SignInRequest){
    try{
      const response = await api.post<SignInResponse>('/sessions', {email, password})
      const {access_token: accessToken} = response.data
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

      localStorage.setItem('access_token',accessToken )
      setAuth(accessToken)
    }catch(err){
      if(err instanceof Error){
        console.log(err)
      }
    }
  }

  async function signOut(): Promise<void>{
    localStorage.clear()
    setAuth('')
  }

  useEffect(() =>{
    const accessToken = localStorage.getItem('access_token')

    if(accessToken){
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
  },[])

  return(
    <AuthContext.Provider value={
        {
          auth,
          signIn,
          signOut, 
        }
      }>
      {children}
    </AuthContext.Provider>
  )
}
