import { formatCurrencyNumber, formatTimeAgo } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  description?: string;
  photo?: string;
  created_at: Date;
  updated_at?: Date;
};

type ListProductProps = {
  product: Product;
};

export default function ListProduct({ product }: ListProductProps) {
  const { id, title, price, description, photo, created_at } = product;

  return (
    <Link href={`/products/${id}`} className='flex gap-5'>
      <div className='relative size-28 rounded-md overflow-hidden'>
        <Image
          src={photo ? photo : 'https://picsum.photos/200'}
          alt={title}
          fill
        />
      </div>
      <div className='flex flex-col gap-1'>
        <span>{title}</span>
        <span>{`${formatCurrencyNumber(price)} USD`}</span>
        <span>{description}</span>
        <span>{formatTimeAgo(created_at)}</span>
      </div>
    </Link>
  );
}
