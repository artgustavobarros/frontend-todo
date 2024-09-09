import { Check, Trash } from "@phosphor-icons/react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Details } from "../details";
import { EditDialog } from "../edit-dialog";
import dayjs from '@/utils/dayjs';
import { Flag } from "../flag";
import { Task } from "@/api/@types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/api/delete-task";
import { changeStatus } from "@/api/change-status";
import { checkedDate, checkedDeleteButton, checkedLabel } from "./variants";

interface TasksLineProps{
  data: Task
}

export function TaskLine({data}: TasksLineProps){
  const queryClient = useQueryClient()

  const date = dayjs(data.updatedAt).format("DD[ de ]MMM")

  const {mutateAsync: deleteTaskFn} = useMutation({
    mutationFn: deleteTask,
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ['todo-tasks']})
    }
  })

  const {mutateAsync: changeStatusFn} = useMutation({
    mutationFn: changeStatus,
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ['todo-tasks']})
    }
  })

  function handleDeleteTask(){
    const {id} = data
    deleteTaskFn(id)
  }

  function handleChangeTaskStatus(){
    const newStatus = data.status === 'done' ? 'undone' : 'done'
    const {id} = data
    changeStatusFn({id, status: newStatus})
  }

  return(
    <div className="bg-background h-14 flex items-center  text-lg gap-4">
      <Flag priority={data.category}/>
      <div className="flex justify-between w-full px-5 py-3 rounded-sm">
        <div className="grid grid-cols-[0.5rem_1fr_4.5rem_4.5rem_0.625rem_0.625rem] w-full items-center gap-4">
            <Checkbox.Root 
              className="peer w-5 h-5 bg-green-checkbox p-1 flex flex-col gap-2 items-center justify-center rounded-md data-[state=unchecked]:border-2 data-[state=unchecked]:border-green-checkbox data-[state=unchecked]:bg-white outline-none -ml-4" 
              id={data.id}
              checked={data.status==='done'}
              onCheckedChange={handleChangeTaskStatus}
            >
              <Checkbox.Indicator>
                <Check className="text-white"/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className={checkedLabel({progress: data.status})} htmlFor={data.id}>
              {data.title}
            </label>
            <Details data={data}/>
            <span className={checkedDate({progress:data.status})}>{date}</span>
            <EditDialog data={data}/>
            <button 
              className={checkedDeleteButton({progress: data.status})}
              onClick={handleDeleteTask}
            >
              <Trash className="text-xl"/>
            </button>
        </div>
      </div>
    </div>
  )
}