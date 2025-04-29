import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";

export default function LogInPage() {
  const handleFormSubmit = async (formData: FormData) => {
    'use server';
    console.log(formData.get('email'), formData.get('password'))
  }
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2 className='text-lg'>Please login with your email and password</h2>
      </div>
      <form action={handleFormSubmit} className='flex flex-col gap-4'>
        <FormInput type='email' placeholder="Email" required name='email'/>
        <FormInput type='password' placeholder="Password" required name='password'/>
        <FormButton text='Login' />
      </form>
      <SocialLogin />
    </section>
  )
};