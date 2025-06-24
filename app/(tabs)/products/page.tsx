import ListProducts from '@/components/ListProducts';
import { getProductsByPage } from '@/service/product';
import { PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await getProductsByPage(1);

  return (
    <section className='py-10 flex flex-col gap-6'>
      <ListProducts initialProducts={products} />
      <Link
        href='/products/add'
        className='flex items-center justify-center bg-orange-400 transition-colors hover:bg-orange-300 active:scale-95 size-12 rounded-full fixed bottom-24 right-12 text-amber-50'
      >
        <PlusIcon className='size=10' />
      </Link>
    </section>
  );
}
