import { Task } from '@/context/fetch-tasks/context';
import { useTask } from '@/context/fetch-tasks/use-tasks';
import * as Dialog from '@radix-ui/react-dialog';
import dayjs from 'dayjs';
import { useState } from 'react';

interface DetailsProps {
  id: string
}

const categoryMapper = {
  'green':'verde',
  'yellow':'amarela',
  'red':'vermelha'
}

const statusMapper = {
  'done': 'Concluído',
  'undone': 'Em progresso'
}

export function Details({id}: DetailsProps){
  const {getTaskDetails} = useTask()
  const [task, setTask] = useState({} as Task)

  async function handleDetails(){
    setTask(await getTaskDetails(id))
  }

  function dateFormat(date: string){
    return dayjs(date).format('DD[ de ]MMMM[ de ]YYYY')
  }
  

  return  (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          className="text-green-checkbox text-xs border border-green-checkbox p-2 rounded-md font-semibold "
          onClick={handleDetails}
        >
          RESUMO
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-bg-overlay backdrop-blur-md'/>
        <Dialog.Content className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          <Dialog.Description className='sr-only'>Resumo da atividade</Dialog.Description>
          <div className='bg-bg-dialog-color p-10 text-text-pattern text-lg space-y-2 w-[45rem] rounded-md'>
            <Dialog.Title className='font-bold text-2xl'>{task.title}</Dialog.Title>
            <h2><span className='font-bold'>Categoria: </span> {categoryMapper[task.category]}</h2>
            <h2><span>Conteúdo: </span> {task.content}</h2>
            <h2><span>Estado: </span> {statusMapper[task.status]}</h2>
            <h2><span>Data de criação: </span> {dateFormat(task.createdAt)} </h2>
            <h2><span>Data de atualização: </span> {dateFormat(task.updatedAt)} </h2>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}