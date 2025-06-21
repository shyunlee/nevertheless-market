'use client';

import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewPaperIcon,
  ShoppingCartIcon as OutlineShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon as OutlineUserCircleIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ShoppingCartIcon as SolidShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon as SolidUserCircleIcon
} from '@heroicons/react/24/solid';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathName = usePathname();

  return (
    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full mx-auto max-w-lg grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white '>
      <Link href='/products' className='flex flex-col items-center gap-px'>
        {pathName === '/products' ? (
          <SolidHomeIcon className='w-7 h-7' />
        ) : (
          <OutlineHomeIcon className='w-7 h-7' />
        )}
        <span>Home</span>
      </Link>
      <Link href='/life' className='flex flex-col items-center gap-px'>
        {pathName === '/life' ? (
          <SolidNewspaperIcon className='w-7 h-7' />
        ) : (
          <OutlineNewPaperIcon className='w-7 h-7' />
        )}
        <span>Life</span>
      </Link>
      <Link href='/live' className='flex flex-col items-center gap-px'>
        {pathName === '/live' ? (
          <SolidShoppingCartIcon className='w-7 h-7' />
        ) : (
          <OutlineShoppingCartIcon className='w-7 h-7' />
        )}
        <span>Shopping</span>
      </Link>
      <Link href='/chat' className='flex flex-col items-center gap-px'>
        {pathName === '/chat' ? (
          <SolidChatBubbleOvalLeftEllipsisIcon className='w-7 h-7' />
        ) : (
          <OutlineChatBubbleOvalLeftEllipsisIcon className='w-7 h-7' />
        )}
        <span>Chat</span>
      </Link>
      <Link href='/profile' className='flex flex-col items-center gap-px'>
        {pathName === '/profile' ? (
          <SolidUserCircleIcon className='w-7 h-7' />
        ) : (
          <OutlineUserCircleIcon className='w-7 h-7' />
        )}
        <span>Profile</span>
      </Link>
    </div>
  );
}
