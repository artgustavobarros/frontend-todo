import { tv } from "tailwind-variants";

export const checkedLabel = tv({
  base: 'text-text-secondary flex-1 font-light text-xl ml-4',
  variants: {
    progress: {
      undone: '',
      done: 'line-through text-text-muted',
    }
  }
})

export const checkedDate = tv({
  base: 'text-text-secondary text-sm hidden md:block',
  variants: {
    progress: {
      undone: '',
      done: 'text-text-text-muted',
    }
  }
})

export const checkedDeleteButton = tv({
  base: 'text-text-secondary outline-none hover:text-checkbox-active transition all',
  variants: {
    progress: {
      undone: '',
      done: 'text-text-text-muted',
    }
  }
})

export const checkedDetailsButton = tv({
  base: "text-checkbox-active outline-none text-xs border border-checkbox-active p-2 rounded-md font-semibold transition-all hover:text-white hover:bg-checkbox-active",
  variants: {
    progress: {
      undone: '',
      done: 'opacity-60',
    }
  }
})

export const checkedEditButton = tv({
  base: "text-text-primary text-xl outline-none hover:text-checkbox-active transition-all",
  variants: {
    progress: {
      undone: '',
      done: 'opacity-50',
    }
  }
})