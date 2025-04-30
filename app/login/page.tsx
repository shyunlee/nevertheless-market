'use client';

import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";
import { handleFormSubmit } from "./actions";
import { useActionState, useState } from "react";

export default function LogInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, action] = useActionState(handleFormSubmit, {errors: []})
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2 className='text-lg'>Please login with your email and password</h2>
      </div>
      <form action={action} className='flex flex-col gap-4'>
        <FormInput type='email' placeholder="Email" required name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <FormInput type='password' placeholder="Password" required name='password' errors={state.errors} value={password} onChange={(e) => setPassword(e.target.value)}/>
        <FormButton text='Login' />
      </form>
      <SocialLogin />
    </section>
  )
};