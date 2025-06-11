const loadingContentColor = 'bg-neutral-500'

export default function Loading() {
  return (
    <div className='flex flex-col gap-4 py-10'>
      <div className='flex gap-2 animate-pulse'>
        <div className={`${loadingContentColor} size-28 rounded-md`}></div>
        <div className={`flex flex-col gap-2 *:rounded-md`}>
          <div className={`${loadingContentColor} w-40 h-5`}></div>
          <div className={`${loadingContentColor} w-20 h-5`}></div>
          <div className={`${loadingContentColor} w-10 h-5`}></div>
        </div>
      </div>
    </div>
  )
};