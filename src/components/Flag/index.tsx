
import { tv } from "tailwind-variants"
import { Category } from "../../api/@types"

interface FlagProps{
  priority: Category
}

const flag = tv({
  base: 'h-full w-1',
  variants:{
    color:{
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500'
    }
  }
})

export function Flag({priority}: FlagProps){
  return <span className={flag({color:priority})}/>
}