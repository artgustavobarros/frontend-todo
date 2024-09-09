import * as RadioGroup from '@radix-ui/react-radio-group';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { tv } from 'tailwind-variants';
import { paramsMapper } from '@/utils/params-mapper';



interface PrioritySelectProps<T extends FieldValues>{
  control: Control<T>
  name: Path<T>
}


const span = tv({
  base: 'hidden md:block border rounded-md p-2 group-data-[state=checked]:text-white hover:text-white transition-all',
  variants: {
    color:{
      green:'text-green-600  border-green-600 group-data-[state=checked]:bg-green-600 hover:bg-green-600',
      yellow: 'text-yellow-600  border-yellow-600 group-data-[state=checked]:bg-yellow-600 hover:bg-yellow-600',
      red: 'text-red-600  border-red-600 group-data-[state=checked]:bg-red-600 hover:bg-red-600',
    }
  }
})

const smSpan = tv({
  base: 'w-5 h-5 rounded-md block md:hidden bg-white hover:bg-white transition-all border',
  variants: {
    color:{
      green:'group-data-[state=checked]:bg-green-600 border-green-600',
      yellow: 'group-data-[state=checked]:bg-yellow-600 border-yellow-600',
      red: 'group-data-[state=checked]:bg-red-600 border-red-600'
    }
  }
})

const categoryArray = ['green', 'yellow', 'red'] as const


export function PrioritySelect<T extends FieldValues>({control, name}: PrioritySelectProps<T>){

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
                <span className={smSpan({color:category})}></span>
                <span className={span({color:category})}>
                  {paramsMapper[category]}
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