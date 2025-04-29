import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";
import SocialLogin from "@/components/SocialLogin";

export default function SignUpPage() {
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>Hello, Welcome!</h1>
        <h2 className='text-xl'>Please fill in the form below to join</h2>
      </div>
      <form className='flex flex-col gap-4'>
        <FormInput type='text' placeholder="Username" required name='username'/>
        <FormInput type='email' placeholder="Email" required name='email'/>
        <FormInput type='password' placeholder="Password" required name='password'/>
        <FormInput type='password' placeholder="Confirm Password" required name='confirmPassword'/>
        <FormButton text='Create Account' />
      </form>
      <SocialLogin />
    </section>
  )
};