import { useNavigate } from "react-router-dom"

interface GetByTopicsProps{
  topics: 'category' | 'status'
  params: 'green' | 'yellow' | 'red' | 'done' | 'undone'
}

const paramsMapper = {
  'green': 'Verde',
  'yellow': 'Amarelo',
  'red': 'Vermelho',
  'done': 'Finalizado',
  'undone': 'Em progresso'
  }

export function GetByTopics({topics,params}: GetByTopicsProps){

  const navigate = useNavigate()

  function handleNavigate(){
    navigate(`/${topics}/${params}`)
  }

  return(
    <button onClick={handleNavigate}>
      <li className="text-text-pattern text-xl font-light">{paramsMapper[params]}</li>
    </button>
  )
}