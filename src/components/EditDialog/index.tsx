import { PencilLine } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { PrioritySelect } from '../Priority-select';

export function EditDialog(){
  return  (
    <Dialog.Root>
      <Dialog.Trigger>
      <PencilLine className="text-text-pattern text-xl"/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-bg-overlay backdrop-blur-md'/>
        <Dialog.Content className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          <Dialog.Description className='sr-only'>Editar atividade</Dialog.Description>
          <div className='bg-bg-dialog-color p-10 text-text-pattern text-lg space-y-2 w-[45rem] rounded-md'>
            {/* {adicionar como title o nome da task} */}
            <Dialog.Title className='sr-only'>EDIT TASK NAME</Dialog.Title>
            <form className='flex flex-col gap-2'>
              <div className='flex flex-col bg-white'>
                <input placeholder='brush teeth' className='outline-none placeholder:text-xl text-xl p-2'/>
                <textarea placeholder='with colgate' className='outline-none resize-none placeholder:text-sm text-sm p-2'/>
              </div>
              <div className='flex mt-4 items-center justify-between'>
                <span className='flex gap-4'>prioridade: <PrioritySelect/></span>
                <button className='text-green-checkbox border rounded-md border-green-checkbox p-2'>alterar</button>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}