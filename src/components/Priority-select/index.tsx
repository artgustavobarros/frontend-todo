import * as RadioGroup from '@radix-ui/react-radio-group';

export function PrioritySelect(){

  return(
    <RadioGroup.Root className='flex gap-4'>
      <div>
        <RadioGroup.Item value='green' className='group'>
          <RadioGroup.Indicator/>
         <span className='text-green-600 border rounded-md border-green-600 p-2 group-data-[state=checked]:text-white group-data-[state=checked]:bg-green-600'>Verde</span>
        </RadioGroup.Item>
      </div>
      <div>
        <RadioGroup.Item value='yellow' className='group'>
          <RadioGroup.Indicator/>
          <span className='text-orange-400 border rounded-md border-orange-400 p-2 group-data-[state=checked]:text-white group-data-[state=checked]:bg-orange-400'>Amarelo</span>
        </RadioGroup.Item>
      </div>
      <div>
        <RadioGroup.Item value='red' className='group'>
          <RadioGroup.Indicator/>
          <span className='text-red-400 border rounded-md border-red-400 p-2 group-data-[state=checked]:text-white group-data-[state=checked]:bg-red-400'>Vermelho</span>
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  )
}