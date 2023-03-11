import React, { ComponentPropsWithoutRef, ElementType, LegacyRef } from 'react'

type InputOwnProps = {}

type InputProps<T extends ElementType> = InputOwnProps &
  ComponentPropsWithoutRef<T>

const Input = <T extends ElementType = 'input'>(
  { className, register, ...props }: InputProps<T>,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`${
        className
          ? className
          : 'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
      }`}
    />
  )
}

export default React.forwardRef(Input)
