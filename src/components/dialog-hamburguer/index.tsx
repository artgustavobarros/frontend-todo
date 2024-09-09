import * as Dialog from '@radix-ui/react-dialog';
import Hamburger from 'hamburger-react';
import colors from 'tailwindcss/colors'

import { useState } from 'react';
import { Nav } from '../nav';

export function DialogHamburguer(){

  const [isOpen, setIsOpen] = useState(false)

  return(
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className='md:hidden'>
        <Hamburger color={colors.white} toggled={isOpen} toggle={setIsOpen}/>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay/>
        <Dialog.Content className='fixed top-20 right-0 animate-moveInRightFaster md:hidden'>
          <Dialog.Title className='sr-only'>Menu</Dialog.Title>
          <Dialog.Description className='sr-only'>menu navegável</Dialog.Description>
          <Nav/>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}