import { getProductDetail } from "@/service/product"

type ProductDetailPageProps = {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({params: {id}}: ProductDetailPageProps) {
  const product = await new Promise(resolve => setTimeout(() => resolve(getProductDetail(id)), 5000))
  return (
    <>
      Product Details
    </>
  )
};