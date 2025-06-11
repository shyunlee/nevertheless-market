import db from '@/lib/db';

export async function getAllProducts() {
  return await db.product.findMany()
}