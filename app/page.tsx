import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-6 pb-24'>
      <div className='my-auto flex flex-col items-center gap-4 *:font-medium'>
        <span className='text-8xl'>🥕</span>
        <h1 className='text-4xl'>Carrot Market</h1>
        <h2 className='text-xl'>Welcome to the Carrot Market</h2>
      </div>
      <div className='flex flex-col items-center gap-3 w-full'>
        <Link href='/create-account' className='w-full bg-orange-500 text-white py-2 rounded-md text-center text-lg font-medium hover:bg-orange-400 transition-colors'>Start</Link>
        <div>
          <span>Have you already signed up?</span>
          <Link href='/login' className='font-bold text-md ml-2 hover:text-orange-400 transition-colors'>Login</Link>
        </div>
      </div>
    </main>
  );
}
