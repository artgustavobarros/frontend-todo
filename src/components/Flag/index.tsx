
interface FlagProps{
  priority: string
}

export function Flag({priority}: FlagProps){
  return <span className={`h-full w-1 bg-${priority}-500`}/>
}