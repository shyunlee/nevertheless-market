type FormButtonProps = {
  isLoading: boolean;
  text: string;
};

export default function FormButton({ isLoading, text }: FormButtonProps) {
  return (
    <button
      className='primary-btn h-10 disabled:bg-neutral-500 disabled:text-neutral-300 disabled:cursor-not-allowed'
      disabled={isLoading}
    >
      {isLoading ? 'Loading..' : text}
    </button>
  );
}
