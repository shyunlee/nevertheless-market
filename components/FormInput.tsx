type FormInputProps = {
  type: string;
  placeholder?: string;
  required?: boolean;
  errors?: string[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({type, placeholder, required=false, errors=[], name, value, onChange}: FormInputProps) {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='w-full text-white bg-transparent border-none focus:outline-none ring-1 ring-neutral-200 rounded-md py-2 px-3 focus:ring-2 focus:ring-orange-500'
        type={type}
        placeholder={placeholder}
        required={required}
        name={name}
        onChange={onChange}
        value={value}
      />
      {
        errors.length > 0 && errors.map((errorText, index) => (
          <span key={index} className='text-red-400 font-medium leading-4'>{errorText}</span>
        ))
      }
    </div>
  );
}
