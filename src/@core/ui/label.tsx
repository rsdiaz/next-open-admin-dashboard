import { ComponentPropsWithoutRef, ElementType } from 'react'

type LabelOwnProps = {}

type InputProps<T extends ElementType> = LabelOwnProps &
  ComponentPropsWithoutRef<T>

const Label = <T extends ElementType = 'label'>({
  className,
  children,
  ...props
}: InputProps<T>) => {
  return (
    <label
      {...props}
      className={`${
        className
          ? className
          : 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      }`}
    >
      {children}
    </label>
  )
}

export default Label
