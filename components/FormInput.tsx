type FormInputProps = {
  type: string;
  placeholder?: string;
  required?: boolean;
  error?: string[];
}

export default function FormInput({type, placeholder, required=false, error}: FormInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='w-full text-white bg-transparent border-none focus:outline-none ring-1 ring-neutral-200 rounded-md py-2 px-3 focus:ring-2 focus:ring-orange-500'
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {
        error && error.length > 0 && error.map((errorText, index) => (
          <span key={index} className='text-red-500 font-medium'>{errorText}</span>
        ))
      }
    </div>
  );
}
