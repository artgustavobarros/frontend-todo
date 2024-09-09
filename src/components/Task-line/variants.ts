import { tv } from "tailwind-variants";

export const checkedLabel = tv({
  base: 'text-text-pattern-two flex-1 font-light text-xl ml-4',
  variants: {
    progress: {
      undone: '',
      done: 'line-through text-text-line-through',
    }
  }
})

export const checkedDate = tv({
  base: 'text-text-pattern-two text-sm',
  variants: {
    progress: {
      undone: '',
      done: 'text-text-line-through',
    }
  }
})

export const checkedDeleteButton = tv({
  base: 'text-text-pattern-two hover:text-green-checkbox transition all',
  variants: {
    progress: {
      undone: '',
      done: 'text-text-line-through',
    }
  }
})

export const checkedDetailsButton = tv({
  base: "text-green-checkbox text-xs border border-green-checkbox p-2 rounded-md font-semibold transition-all hover:text-white hover:bg-green-checkbox",
  variants: {
    progress: {
      undone: '',
      done: 'opacity-60',
    }
  }
})

export const checkedEditButton = tv({
  base: "text-text-pattern text-xl hover:text-green-checkbox transition-all",
  variants: {
    progress: {
      undone: '',
      done: 'opacity-50',
    }
  }
})