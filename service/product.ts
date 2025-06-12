import db from '@/lib/db';

export async function getAllProducts() {
  return await db.product.findMany()
}

export async function getProductDetail(id: string) {
  return await db.product.findUnique({
    where: {
      id: Number(id)
    },
  })
}