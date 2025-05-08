import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const cx = (...args) => {
  return twMerge(clsx(args))
}
