import { PencilLine } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { PrioritySelect } from '../priority-select';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Task } from '@/api/@types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editTask } from '@/api/edit-task';
import { checkedEditButton } from '../task-line/variants';

interface EditDialogProps{
  data: Task
}

const editTaskInputsValidation = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  category: z.enum(['green', 'yellow', 'red']).optional()
})

type EditTaskFormSchema = z.infer<typeof editTaskInputsValidation>

export function EditDialog({data}: EditDialogProps){
  const queryClient = useQueryClient()

  const {register, handleSubmit, control} = useForm<EditTaskFormSchema>({resolver: zodResolver(editTaskInputsValidation)})

  const {mutateAsync: editTaskFn} = useMutation({
    mutationFn: editTask,
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ['todo-tasks']})
    }
  })

  function handleEditTask(values: EditTaskFormSchema){
    const title = values.title ?? data.title
    const content = values.content ?? data.content
    const category = values.category ?? data.category
    const id = data.id
    editTaskFn({id, title, content, category})
  }

  return  (
    <Dialog.Root>
      <Dialog.Trigger>
      <PencilLine className={checkedEditButton({progress: data.status})}/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-bg-overlay backdrop-blur-md'/>
        <Dialog.Content className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          <Dialog.Description className='sr-only'>Editar atividade</Dialog.Description>
          <div className='bg-bg-dialog-color p-10 text-text-pattern text-lg space-y-2 w-[45rem] rounded-md bg-white'>
          <Dialog.Title className='sr-only'>{data.title}</Dialog.Title>
          <form className='flex flex-col gap-2 bg-white' onSubmit={handleSubmit(handleEditTask)}>
            <div className='flex flex-col bg-transparent'>
              <input placeholder={data.title} className='outline-none placeholder:text-xl text-xl p-2 bg-transparent'
              {...register('title')}
              />
              <textarea placeholder={data.content} className='outline-none resize-none placeholder:text-sm text-sm p-2 bg-transparent' {...register('content')}/>
            </div>
            <div className='flex mt-4 items-center justify-between'>
              <span className='flex gap-4'>prioridade: <PrioritySelect control={control} name='category'/></span>
              <button className='text-green-checkbox border rounded-md border-green-checkbox p-2 hover:text-white hover:bg-green-checkbox transition-all'>alterar</button>
            </div>
          </form>
        </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}