import logo from "../../assets/logo.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { z } from "zod"
import { Layout } from "../../components/layout"
import { LoginFormInput } from "../../components/login-form-input"
import { resetPassword } from "../../api/reset-password"

const recoverPasswordInputsSchemaValidation = z.object({
  email:z.string().email(),
  newPassword: z.string().optional()
})

type RecoverPasswordFormValidationSchema = z.infer<typeof recoverPasswordInputsSchemaValidation>

export function ResetPassword(){

  const navigate = useNavigate()

  const {register, handleSubmit} = useForm<RecoverPasswordFormValidationSchema>({
    resolver: zodResolver(recoverPasswordInputsSchemaValidation)
  })

  async function handleRecoverPasswordSubmit(data: RecoverPasswordFormValidationSchema){
    const {email, newPassword} = data
    resetPassword({email, newPassword})
    navigate('/')
  }

  return (
   <Layout>
     <section className="w-[50rem] h-[30rem] bg-white flex rounded-3xl">
        <div className="bg-primary-header flex items-center justify-center">
          <img src={logo} className="animate-moveInRight"/> 
        </div>
        <div className="flex flex-col gap-4 p-8 ml-20 justify-center items-end">
          <div className="flex flex-col items-end">
            <h2 className="text-xl text-text-secondary font-bold">// TO<span> - </span>DO</h2>
            <h1 className="text-3xl text-text-primary italic">Organize it all <span>-</span></h1>
          </div>
          <form className="flex flex-col gap-4 mb-4" id="sign-up" onSubmit={handleSubmit(handleRecoverPasswordSubmit)}>
            <LoginFormInput placeholder="// Seu email" type="email" {...register('email')}/>
            <LoginFormInput placeholder="// Sua nova senha" type="password" {...register('newPassword')}/>
          </form>
          <button type="submit" form="sign-up" className="text-text-primary transition-all hover:font-normal hover:before:content-['//_']">atulizar</button>
          <Link to={'/'} className="text-text-primary transition-all hover:font-normal hover:before:content-['//_']">voltar</Link>
        </div>
      </section>
   </Layout>
  )
}