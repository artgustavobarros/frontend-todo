import logo from "@/assets/logo.png"
import { Link } from "react-router-dom"
import { Layout } from "@/components/layout"

export function PageNotFound(){

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
          <div className="flex flex-col gap-8 p-8 md:ml-20 lg:items-end">
            <h2 className="text-xl text-text-secondary font-bold text-justify">// alguma coisa aconteceu, você foi redirecionado por acidente!</h2>
            <h1 className="text-3xl text-text-primary italic">Página não encontrada -</h1>
          </div>
          <div className="flex lg:flex-col gap-8 items-end justify-center">
            <Link to={'/'} className="text-text-primary transition-all hover:font-normal hover:before:content-['//_']">retornar para a página inicial</Link>
          </div>
        </div>
      </section>
   </Layout>
  )
}