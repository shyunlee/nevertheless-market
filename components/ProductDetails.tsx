import { DetailProduct } from '@/types/product';
import { UserIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import Link from 'next/link';

type ProductDetailsProps = {
  product: DetailProduct & {
    username: string;
    userAvatar: string | null;
  };
  isOwner: boolean;
};

export default function ProductDetails({ product, isOwner }: ProductDetailsProps) {
  const { title, price, description, photo, userAvatar, username } = product;
  return (
    <div>
      <div className='relative aspect-square'>
        <Image fill src={photo} alt={title} />
      </div>
      <div className='p-5 flex items-center gap-3 border-b border-neutral-700'>
        <div className={`size-10 rounded-full ${!userAvatar ? 'p-1 bg-neutral-600': ''}`}>
          {!!userAvatar ? (
            <Image
              className='object-cover'
              src={userAvatar}
              width={40}
              height={40}
              alt={username}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{username}</h3>
        </div>
      </div>
      <div className='p-5'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='fixed w-full bottom-0 left-0 p-5 pb-10 bg-neutral-800 flex justify-evenly items-center'>
        <span className='font-semibold text-2xl'>
          $ {price}
        </span>
        {isOwner ? (
          <button className='bg-red-500 px-5 py-2.5 rounded-md text-white font-semibold'>
            Delete product
          </button>
        ) : null}
        <Link
          className='bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold'
          href={``}
        >
          Start Chatting
        </Link>
      </div>
    </div>
  );
}
