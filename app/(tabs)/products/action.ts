'use server';

import { getProductsByPage } from "@/service/product";

export async function getMoreProducts(page: number) {
  return await getProductsByPage(page);
}