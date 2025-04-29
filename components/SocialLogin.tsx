import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { FaGithub } from "react-icons/fa";

import Link from 'next/link';

export default function SocialLogin() {
  return (
    <>
      <div className='w-full h-px bg-neutral-500' />
      <div className='flex flex-col gap-4'>
        <Link
          href='/github/start'
          className='flex primary-btn h-10 items-center justify-center gap-2'
        >
          <span>
          <FaGithub className='size-6'/>
          </span>
          <span>Continue with Github</span>
        </Link>
        <Link
          href='/sms'
          className='flex primary-btn h-10 items-center justify-center gap-2'
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className='size-6' />
          </span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
