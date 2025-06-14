import db from '@/lib/db';

export async function getAllProducts() {
  return await db.product.findMany()
}

export async function getProductDetail(id: number) {
  return await db.product.findUnique({
    where: {
      id
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true
        }
      }
    }
  })
}