'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type InputProps = React.ComponentProps<'input'> & {
  title?: string
  className?: string
  classNameInput?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ title, className, classNameInput, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-2 w-full', className)}>
        {title && (
          <label className="text-sm font-medium text-gray-700">{title}</label>
        )}
        <input
          ref={ref}
          {...props}
          className={cn(
            'w-full min-h-12 px-4 py-2 border border-gray-200 rounded-xl shadow-sm',
            'hover:border-gray-500 focus:border-gray-500 focus:ring-1 focus:ring-[#6a7282]/30 outline-none transition-all',
            classNameInput
          )}
        />
      </div>
    )
  }
)
