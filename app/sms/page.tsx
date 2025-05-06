'use client';

import FormInput from '@/components/FormInput';
import FormButton from '@/components/FormButton';
import { useActionState, useState } from 'react';
import { verifySms } from './actions';

export default function SMSLogin() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');

  const [state, action] = useActionState(verifySms, {token: false});
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>SMS Login</h1>
        <h2 className='text-lg'>Verify your phone number</h2>
      </div>
      <form action={action} className='flex flex-col gap-4'>
        <FormInput
          type='text'
          placeholder='Phone Number'
          required
          name='phone'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          errors={state?.errors}
        />
        {state.token && phoneNumber && <FormInput
          type='text'
          placeholder='Verfication Code'
          required
          name='token'
          value={token}
          onChange={(e) => setToken(e.target.value)}
          min={100000}
          max={999999}
        />}
        <FormButton text={state.token ? "Verify" : "Send Code"} />
      </form>
    </section>
  );
}
