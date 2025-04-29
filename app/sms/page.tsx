import FormInput from "@/components/FormInput";
import FormButton from "@/components/FormButton";

export default function SMSLogin() {
  return (
    <section className='flex flex-col gap-8 py-10 min-h-screen justify-center'>
      <div className='flex flex-col gap-2 *:font-medium'>
        <h1 className='text-2xl'>SMS Login</h1>
        <h2 className='text-lg'>Verify your phone number</h2>
      </div>
      <form className='flex flex-col gap-4'>
        <FormInput type='number' placeholder="Phone Number" required name='phonenumber'/>
        <FormInput type='number' placeholder="Verfication Code" required name='verificationCode'/>
        <FormButton text='Verify' />
      </form>
    </section>
  )
};