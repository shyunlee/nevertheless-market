import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

export default function SignUpPage() {
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2 className='text-xl'>Please fill in the form below to join</h2>
      </div>
      <form className='flex flex-col gap-4'>
        <FormInput type='text' placeholder="Username" required />
        <FormInput type='email' placeholder="Email" required />
        <FormInput type='password' placeholder="Password" required />
        <FormInput type='password' placeholder="Confirm Password" required />
        <FormButton text='Create Account' isLoading={false} />
      </form>
      <div className='w-full h-px bg-neutral-500'/>
      <div>
        <Link href='/sms' className='flex primary-btn h-10 items-center justify-center gap-1'>
          <span><ChatBubbleOvalLeftEllipsisIcon className='h-6 w-6'/></span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </section>
  )
};