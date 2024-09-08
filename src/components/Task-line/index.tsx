import { Check, Trash } from "@phosphor-icons/react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Details } from "../Details";
import { EditDialog } from "../EditDialog";
import { Task } from "@/context/fetch-tasks/context";
import dayjs from '@/utils/dayjs';
import { Flag } from "../Flag";
import { useTask } from "@/context/fetch-tasks/use-tasks";

interface TasksLineProps{
  data: Task
}

export function TaskLine({data}: TasksLineProps){
  const {deleteTask, editStatus} = useTask()

  const date = dayjs(data.updatedAt).format("DD[ de ]MMM")

  function handleDelete(){
    deleteTask(data.id)
  }

  function handleEditStatus(){
    const {id, status} = data
    const newStatus = status === 'done' ? 'undone' : 'done'
    editStatus({id, status: newStatus})
  }

  return(
    <div className="bg-background h-14 flex items-center  text-lg gap-4">
      <Flag priority={data.category}/>
      <div className="flex justify-between w-full px-5 py-3 rounded-sm">
        <div className="grid grid-cols-[0.5rem_1fr_4.5rem_4.5rem_0.625rem_0.625rem] w-full items-center gap-4">
            <Checkbox.Root className="peer w-5 h-5 bg-green-checkbox p-1 flex flex-col gap-2 items-center justify-center rounded-md data-[state=unchecked]:border-2 data-[state=unchecked]:border-green-checkbox data-[state=unchecked]:bg-white outline-none -ml-4" id={data.id} onClick={handleEditStatus}>
              <Checkbox.Indicator>
                <Check className="text-white"/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="text-text-pattern-two flex-1 font-light text-xl peer-data-[state=checked]:line-through peer-data-[state=checked]:text-text-line-through ml-4" htmlFor={data.id}>
              {data.title}
            </label>
            <Details id={data.id}/>
            <span className="text-text-pattern-two text-sm peer-data-[state=checked]:text-text-line-through">{date}</span>
            <EditDialog data={data}/>
            <button onClick={handleDelete} className="text-text-pattern-two peer-data-[state=checked]:text-text-line-through">
              <Trash className="text-xl"/>
            </button>
        </div>
      </div>
    </div>
  )
}