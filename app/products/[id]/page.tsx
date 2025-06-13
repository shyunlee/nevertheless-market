import { getSession } from "@/lib/session"
import { getProductDetail } from "@/service/product"
import { notFound } from "next/navigation"

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
}

async function getIsOwner(userId: number) {
  const session = await getSession();
  return session.id && session.id === userId;
}

export default async function ProductDetailPage({params}: ProductDetailPageProps) {
  const { id } = await params;
  const productId = Number([id])
  if (isNaN(productId)) {
    return notFound();
  }

  const product = await getProductDetail(productId);

  if (!product) {
    return notFound();
  }

  const isOwner = await getIsOwner(product.userId);

  return (
    <>
      Product Details
    </>
  )
};