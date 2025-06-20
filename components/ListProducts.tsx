'use client';

import { ProductsList } from '@/types/product';
import ListProductCard from './ListProductCard';
import { useState } from 'react';
import { getMoreProducts } from '@/app/(tabs)/products/action';

type ProductsListProps = {
  initialProducts: ProductsList;
};

export default function ListProducts({ initialProducts }: ProductsListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(2);
  const [isLastPage, setIsLastPage] = useState(false);

  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const moreProducts = await getMoreProducts(nextPage);
    if (moreProducts.length !== 0) {
      setNextPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...moreProducts]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  };

  return (
    <>
      {products.map((product) => (
        <ListProductCard key={product.id} product={product} />
      ))}
      {isLastPage ? (
        'No more items'
      ) : (
        <button
          onClick={onLoadMoreClick}
          className='text-sm font-semibold text-orange-300 hover:text-orange-200 active:scale-95 cursor-pointer'
        >
          {isLoading ? 'Loading' : 'Load More'}
        </button>
      )}
    </>
  );
}
