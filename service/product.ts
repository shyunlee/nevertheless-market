import db from '@/lib/db';

export async function getAllProducts() {
  return await db.product.findMany({
    orderBy: {
      created_at: 'desc'
    },
  })
}

export async function getProductsByPage(page: number) {
    const numberInPage = 4;
    return await db.product.findMany({
    orderBy: {
      created_at: 'desc'
    },
    skip: numberInPage * (page-1),
    take: numberInPage
  })
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