import logo from "@/assets/logo.png"
import { LoginFormInput } from "@/components/Login-form-input"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Layout } from "@/components/layout"
import { useTask } from "@/context/fetch-tasks/use-tasks"

const signInLoginInputsSchemaValidation = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignValidationSchema = z.infer<typeof signInLoginInputsSchemaValidation>

export function Login(){

  const navigate = useNavigate()

  const {signIn} = useTask()

  const {register, handleSubmit} = useForm<SignValidationSchema>({
    resolver: zodResolver(signInLoginInputsSchemaValidation)
  })

  async function signInSubmit(data: SignValidationSchema){
    const {email, password} = data
    signIn({email, password})
    navigate('/')
  }

  return (
   <Layout>
     <section className="w-[50rem] h-[30rem] bg-white flex rounded-3xl">
        <div className="bg-header flex items-center justify-center">
          <img src={logo}/> 
        </div>
        <div className="flex flex-col gap-8 p-8 ml-20 items-end">
          <div className="flex flex-col items-end mt-10">
            <h2 className="text-xl text-text-pattern-two font-bold">// TO<span> - </span>DO</h2>
            <h1 className="text-3xl text-text-pattern italic">Organize it all <span>-</span></h1>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(signInSubmit)} id="sign-in"> 
            <LoginFormInput placeholder="// Seu email" type="email" {...register('email')}/>
            <LoginFormInput placeholder="// Sua senha" type="password" {...register('password')} autoComplete="current-password"/>
          </form>
          <button type="submit" form="sign-in">// entrar</button>
          <Link to={'/sign-up'} className="text-text-pattern">// crie sua conta</Link>
        </div>
      </section>
   </Layout>
  )
}