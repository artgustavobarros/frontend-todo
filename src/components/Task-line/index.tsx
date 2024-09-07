import { Check, Trash } from "@phosphor-icons/react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { Details } from "../Details";
import { EditDialog } from "../EditDialog";

export function TaskLine(){
  return(
    <div className="bg-background h-14 flex items-center  text-lg gap-4">
     <span className="h-full w-1 bg-red-500"/>
      <div className="flex justify-between w-full px-5 py-3 rounded-sm">
        <div className="flex items-center gap-4">
            <Checkbox.Root className="w-5 h-5 bg-green-checkbox p-1 flex items-center justify-center rounded-md data-[state=unchecked]:border-2 data-[state=unchecked]:border-green-checkbox data-[state=unchecked]:bg-white outline-none" id="c1">
              <Checkbox.Indicator className="CheckboxIndicator">
                <Check className="text-white"/>
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="text-text-pattern text-xl" htmlFor="c1">
            brush teeth
            </label>
        </div>
        <div className="flex items-center gap-4">
          <Details/>
          <span className="text-text-pattern text-sm">14 de dez</span>
          <EditDialog/>
          <Trash className="text-text-pattern text-xl"/>
        </div>
      </div>
    </div>
  )
}