import logo from "@/assets/logo.png"
import { LoginFormInput } from "@/components/login-form-input"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Layout } from "@/components/layout"
import { useAuth } from "@/context/auth/use-tasks"
import { useMutation } from "@tanstack/react-query"

const signInLoginInputsSchemaValidation = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignValidationSchema = z.infer<typeof signInLoginInputsSchemaValidation>

export function Login(){

  const navigate = useNavigate()

  const {signIn} = useAuth()

  const {register, handleSubmit} = useForm<SignValidationSchema>({
    resolver: zodResolver(signInLoginInputsSchemaValidation)
  })

  const {mutateAsync: signInFn} = useMutation({
    mutationFn: signIn,
    onSuccess(){
      navigate('/')
    }
  })

  async function signInSubmit(data: SignValidationSchema){
    const {email, password} = data
    signInFn({email, password})
  }

  return (
   <Layout>
     <section className="lg:w-[50rem] lg:h-[30rem] lg:bg-white lg:flex text-center rounded-3xl h-screen w-screen">
        <div className="bg-primary-header lg:flex items-center justify-center">
          <img src={logo} className="animate-moveInRight"/> 
        </div>
        <div className="flex flex-col gap-8 p-8 md:ml-20 lg:items-end">
          <div className="flex flex-col lg:items-end mt-10">
            <h2 className="text-xl text-text-secondary font-bold">// TO - DO</h2>
            <h1 className="text-3xl text-text-primary italic">Organize it all -</h1>
          </div>
          <form className="flex flex-col gap-4 items-center lg:items-start" onSubmit={handleSubmit(signInSubmit)} id="sign-in"> 
            <LoginFormInput placeholder="// Seu email" type="email" {...register('email')}/>
            <LoginFormInput placeholder="// Sua senha" type="password" {...register('password')} autoComplete="current-password"/>
          </form>
          <div className="flex lg:flex-col gap-2 items-end justify-center">
            <button type="submit" form="sign-in" className="text-text-primary transition-all hover:font-normal hover:before:content-['//_']">entrar</button>
            <Link to={'/recover'} className="text-text-primary transition-all hover:font-normal hover:before:content-['//_']">esqueceu sua senha?</Link>
            <Link to={'/sign-up'} className="text-text-primary transition-all hover:font-normal hover:before:content-['//_']">crie sua conta</Link>
          </div>
        </div>
      </section>
   </Layout>
  )
}