import { InputHTMLAttributes } from "react";

type FormInputProps = {
  name: string;
  value?: string | number;
  errors?: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({errors=[], name, value, onChange, ...rest}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='w-full text-white bg-transparent border-none focus:outline-none ring-1 ring-neutral-200 rounded-md py-2 px-3 focus:ring-2 focus:ring-orange-500'
        name={name}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {
        errors.length > 0 && errors.map((errorText, index) => (
          <span key={index} className='text-red-400 font-medium leading-4'>{errorText}</span>
        ))
      }
    </div>
  );
}
