import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrioritySelect } from '../priority-select';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { X } from '@phosphor-icons/react';
import { registerTask } from '../../api/register-task';

const createNewTaskInputValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
  category: z.enum(['green', 'yellow','red'])
})

export type CreateNewTaskFormSchema = z.infer<typeof createNewTaskInputValidationSchema>

export function CreateNewTaskButton(){

  const queryClient = useQueryClient();

  const {register, handleSubmit, control} = useForm<CreateNewTaskFormSchema>({
    resolver: zodResolver(createNewTaskInputValidationSchema)
  })

  const {mutateAsync: registerTaskFn} = useMutation({
    mutationFn: registerTask,
    onSuccess(){
      queryClient.invalidateQueries({queryKey: ['todo-tasks']})
    }
  })

  function handleNewTask(data: CreateNewTaskFormSchema){
    const {title, content, category} = data
    registerTaskFn({title, content, category})
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-white text-2xl font-bold mb-4 block bg-primary-header rounded-md p-3 shadow-pattern-two hover:opacity-90 transition-all">Nova tarefa</button>
      </Dialog.Trigger>
      <Dialog.Overlay className='fixed inset-0 bg-bg-overlay backdrop-blur-md'/>
      <Dialog.Content className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        <Dialog.Description className='sr-only'>criar nova tarefa</Dialog.Description>
        <div className='bg-bg-dialog p-10 text-text-primary text-lg space-y-2 w-[45rem] rounded-md bg-white'>
          <Dialog.Title className='sr-only'>criar nova tarefa</Dialog.Title>
          <form className='flex flex-col gap-2 bg-white' onSubmit={handleSubmit(handleNewTask)}>
            <div className='flex flex-col bg-transparent'>
              <input placeholder='Título: pagar contas' className='outline-none placeholder:text-xl text-xl p-2 bg-transparent' {...register('title')}/>
              <textarea placeholder='Conteúdo: ex, conta de internet, conta de celular' className='outline-none resize-none placeholder:text-sm text-sm p-2 bg-transparent' {...register('content')}/>
            </div>
            <div className='flex mt-4 items-center justify-between'>
              <span className='flex gap-4'>prioridade: 
               <PrioritySelect<CreateNewTaskFormSchema> control={control} name='category'/>
              </span>
              <button className='text-checkbox-active border rounded-md border-checkbox-active p-2 hover:text-white hover:bg-checkbox-active transition-all'>criar</button>  
            </div>
          </form>
        </div>
        <Dialog.Close asChild>
          <button className='text-checkbox-active absolute top-4 right-4'>
            <X className='w-5 h-5'/>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  )
}