import clsx from 'clsx'

export const Window = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'flex flex-col space-y-4 rounded-md bg-slate-800 p-4',
        className
      )}
    >
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="text-slate-100">{children}</div>
    </div>
  )
}
