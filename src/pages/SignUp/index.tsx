import logo from "@/assets/logo.png"
import { Layout } from "@/components/layout"
import { LoginFormInput } from "@/components/login-form-input"
import { api } from "@/utils/axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"

const signUpInputsSchemaValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string()
})

type SignUpFormValidationSchema = z.infer<typeof signUpInputsSchemaValidation>

export function SignUp(){

  const navigate = useNavigate()

  const {register, handleSubmit} = useForm<SignUpFormValidationSchema>({
    resolver: zodResolver(signUpInputsSchemaValidation)
  })

  async function handleSignUpSubmit(data: SignUpFormValidationSchema){
    const {name,email,password} = data
    await api.post('/accounts',{name, email, password})
    navigate('/')
  }

  return (
   <Layout>
     <section className="w-[50rem] h-[30rem] bg-white flex rounded-3xl">
        <div className="bg-header flex items-center justify-center">
          <img src={logo} className="animate-moveInRight"/> 
        </div>
        <div className="flex flex-col gap-4 p-8 ml-20 items-end">
          <div className="flex flex-col items-end">
            <h2 className="text-xl text-text-pattern-two font-bold">// TO<span> - </span>DO</h2>
            <h1 className="text-3xl text-text-pattern italic">Organize it all <span>-</span></h1>
          </div>
          <form className="flex flex-col gap-4 mb-4" id="sign-up" onSubmit={handleSubmit(handleSignUpSubmit)}>
            <LoginFormInput placeholder="// Seu nome" {...register('name')}/>
            <LoginFormInput placeholder="// Seu email" type="email" {...register('email')}/>
            <LoginFormInput placeholder="// Sua senha" type="password" {...register('password')}/>
          </form>
          <button type="submit" form="sign-up" className="text-text-pattern transition-all hover:font-normal hover:before:content-['//_']">cadastrar</button>
          <Link to={'/'} className="text-text-pattern transition-all hover:font-normal hover:before:content-['//_']">voltar</Link>
        </div>
      </section>
   </Layout>
  )
}