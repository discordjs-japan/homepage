import clsx from 'clsx'

const colors = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
}

export const Button = ({
  children,
  className,
  as = 'button',
  variant = 'blue',
  ...props
}) => {
  const Component = as

  return (
    <Component
      className={clsx(
        'flex h-12 w-auto cursor-pointer items-center justify-center rounded-xl px-4 font-extrabold tracking-wider text-white transition-opacity hover:opacity-80',
        className,
        colors[variant]
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
