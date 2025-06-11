import ListProduct from "@/components/ListProduct"
import { getAllProducts } from "@/service/product"

export default async function ProductsPage() {
  const products = await getAllProducts()
  console.log(products)
  return (
    <section className='py-10'>
      {products.map((product) => <ListProduct key={product.id} product={product} />)}
    </section>
  )
};