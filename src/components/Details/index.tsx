import { Task } from '@/api/@types';
import * as Dialog from '@radix-ui/react-dialog';
import dayjs from 'dayjs';
import { checkedDetailsButton } from '../task-line/variants';

interface DetailsProps {
  data: Task
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

export function Details({data}: DetailsProps){

  function dateFormat(date: string){
    return dayjs(date).format('DD[ de ]MMMM[ de ]YYYY')
  }
  
  return  (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          className={checkedDetailsButton({progress:data.status})}
        >
          RESUMO
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-bg-overlay backdrop-blur-md'/>
        <Dialog.Content className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          <Dialog.Description className='sr-only'>Resumo da atividade</Dialog.Description>
          <div className='bg-bg-dialog-color p-10 text-text-pattern text-lg space-y-2 w-[45rem] rounded-md'>
            <Dialog.Title className='font-bold text-2xl'>{data.title}</Dialog.Title>
            <h2><span className='font-bold'>Categoria: </span> {categoryMapper[data.category]}</h2>
            <h2><span>Conteúdo: </span> {data.content}</h2>
            <h2><span>Estado: </span> {statusMapper[data.status]}</h2>
            <h2><span>Data de criação: </span> {dateFormat(data.createdAt)} </h2>
            <h2><span>Data de atualização: </span> {dateFormat(data.updatedAt)} </h2>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}