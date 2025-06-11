export async function getProducts() {
  return new Promise(resolve => setTimeout(resolve, 5000))
}

export default async function ProductsPage() {
  const products = await getProducts()
  return (
    <>
      <h1>Products!</h1>
    </>
  )
};