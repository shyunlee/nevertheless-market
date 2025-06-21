'use client';

import { ProductsList } from '@/types/product';
import ListProductCard from './ListProductCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getMoreProducts } from '@/app/(tabs)/products/action';

type ProductsListProps = {
  initialProducts: ProductsList;
};

export default function ListProducts({ initialProducts }: ProductsListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const trigger = useRef<HTMLSpanElement>(null);

  const onLoadMoreClick = useCallback(async () => {
    setIsLoading(true);
    const moreProducts = await getMoreProducts(page);
    if (moreProducts.length !== 0) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...moreProducts]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        if (element.isIntersecting && trigger.current) {
          observer.unobserve(trigger.current);
          await onLoadMoreClick();
        }
      },
      {
        threshold: 1.0,
      }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [page, onLoadMoreClick]);

  return (
    <>
      {products.map((product, index) => (
        <ListProductCard key={index} product={product} />
      ))}
      {isLastPage ? null : (
        <span
          ref={trigger}
          style={{marginTop: `${page + 1 * 300}vh`}}
          className='text-sm font-semibold text-orange-300 mx-auto hover:text-orange-200 active:scale-95 cursor-pointer'
        >
          {isLoading ? 'Loading' : 'Load More'}
        </span>
      )}
    </>
  );
}
