import ListProducts from "@/components/ListProducts"
import { getProductsByPage } from "@/service/product"

export default async function ProductsPage() {
  const products = await getProductsByPage(1)

  return (
    <section className='py-10 flex flex-col gap-6'>
      <ListProducts initialProducts={products}/>
    </section>
  )
};