import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";

export default function LogInPage() {
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2 className='text-lg'>Please login with your email and password</h2>
      </div>
      <form className='flex flex-col gap-4'>
        <FormInput type='email' placeholder="Email" required />
        <FormInput type='password' placeholder="Password" required />
        <FormButton text='Create Account' isLoading={false} />
      </form>
      <SocialLogin />
    </section>
  )
};