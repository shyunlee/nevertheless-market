import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2>Please fill in the form below to join</h2>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <input className='w-full text-white bg-transparent border-none focus:outline-none ring-1 ring-neutral-200 rounded-md p-2 focus:ring-2 focus:ring-orange-500' type="text" placeholder="Username" required/>
          <span className='text-red-500 font-medium'>Input Error</span>
        </div>
        <button className='primary-btn h-10'>Create Account</button>
      </form>
      <div className='w-full h-px bg-neutral-500'/>
      <div>
        <Link href='/sms' className='flex primary-btn h-10 items-center justify-center'>
          <span><ChatBubbleOvalLeftEllipsisIcon className='h-6'/></span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </section>
  )
};