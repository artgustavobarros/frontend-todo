import * as Dialog from '@radix-ui/react-dialog';

export function Details(){
  return  (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          className="text-green-checkbox text-xs border border-green-checkbox p-2 rounded-md font-semibold">
          RESUMO
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-bg-overlay backdrop-blur-md'/>
        <Dialog.Content className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
          <Dialog.Description className='sr-only'>Resumo da atividade</Dialog.Description>
          <div className='bg-bg-dialog-color p-10 text-text-pattern text-lg space-y-2 w-[45rem] rounded-md'>
            <Dialog.Title className='font-bold text-2xl'>Brush teeth</Dialog.Title>
            <h2><span className='font-bold'>Categoria: </span> Vermelho</h2>
            <h2><span>Conteúdo: </span> Escove os dentes</h2>
            <h2><span>Data de criação: </span> 14 de dezembro de 2024, </h2>
            <h2><span>Data de atualização: </span> 15 de dezembro de 2024 </h2>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}