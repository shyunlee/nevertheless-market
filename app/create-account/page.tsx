'use client';

import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";
import { useActionState, useState } from "react";
import { handleFormSubmit } from "./actions";

export default function SignUpPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [state, action] = useActionState(handleFormSubmit, null)

  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2 className='text-xl'>Please fill in the form below to join</h2>
      </div>
      <form action={action} className='flex flex-col gap-4'>
        <FormInput type='text' placeholder="Username" required name='username' value={username} onChange={(e) => setUsername(e.target.value)} errors={state?.fieldErrors.username}/>
        <FormInput type='email' placeholder="Email" required name='email' value={email} onChange={(e) => setEmail(e.target.value)} errors={state?.fieldErrors.email}/>
        <FormInput type='password' placeholder="Password" required name='password' value={password} onChange={(e) => setPassword(e.target.value)} errors={state?.fieldErrors.password}/>
        <FormInput type='password' placeholder="Confirm Password" required name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} errors={state?.fieldErrors.confirmPassword}/>
        <FormButton text='Create Account' />
      </form>
      <SocialLogin />
    </section>
  )
};