import ProductDetails from '@/components/ProductDetails';
import { getSession } from '@/lib/session';
import { formatCurrencyNumber, formatTimeAgo } from '@/lib/utils';
import { getProductDetail } from '@/service/product';
import { notFound } from 'next/navigation';

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

async function getIsOwner(userId: number) {
  const session = await getSession();
  return !!session.id && session.id === userId;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const productId = Number([id]);
  if (isNaN(productId)) {
    return notFound();
  }

  const product = await getProductDetail(productId);

  if (!product) {
    return notFound();
  }

  const isOwner = await getIsOwner(product.userId);

  const { title, price, description, photo, created_at, updated_at, user } = product;

  const productDetail = {
    id,
    title,
    price: formatCurrencyNumber(price),
    description,
    photo,
    createdAt: formatTimeAgo(created_at),
    updatedAt: formatTimeAgo(updated_at),
    username: user.username,
    userAvatar: user.avatar
  }

  return (
    <section className='py-10'>
      <ProductDetails
        product={productDetail}
        isOwner={isOwner} 
      />
    </section>
  );
}
