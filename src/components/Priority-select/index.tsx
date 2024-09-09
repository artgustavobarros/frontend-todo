import * as RadioGroup from '@radix-ui/react-radio-group';
import { Control, Controller } from 'react-hook-form';
import { CreateNewTaskFormSchema } from '../create-new-task-button';
import { Category } from '@/api/@types';
import { tv } from 'tailwind-variants';

interface PrioritySelectProps{
  control: Control<CreateNewTaskFormSchema, Category>
  name: 'title' | 'content' | 'category'
}


const span = tv({
  base: 'border rounded-md p-2 group-data-[state=checked]:text-white hover:text-white transition-all',
  variants: {
    color:{
      green:'text-green-600  border-green-600 group-data-[state=checked]:bg-green-600 hover:bg-green-600',
      yellow: 'text-yellow-600  border-yellow-600 group-data-[state=checked]:bg-yellow-600 hover:bg-yellow-600',
      red: 'text-red-600  border-red-600 group-data-[state=checked]:bg-red-600 hover:bg-red-600',
    }
  }
})

const categoryArray = ['green', 'yellow', 'red'] as const

const categoryMapper = {
  'green':'Verde',
  'yellow':'Amarelo',
  'red':'Vermelho'
}

export function PrioritySelect({control, name}: PrioritySelectProps){

  return(
    <Controller control={control} name={name}
    render={({field}) =>{
      return(
        <RadioGroup.Root className='flex gap-4' onValueChange={field.onChange} value={field.value}>
        <div className='flex gap-2'>
          {
            categoryArray.map((category) => (
              <RadioGroup.Item value={category} className='group' key={category}>
                <RadioGroup.Indicator/>
                <span className={span({color:category})}>
                  {categoryMapper[category]}
                </span>
              </RadioGroup.Item>
            ))
          }
        </div>  
      </RadioGroup.Root>
      )
    }}
  />
  )
}