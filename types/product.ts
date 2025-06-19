import { getProductsByPage } from "@/service/product";
import { Prisma } from "@prisma/client";

export type DetailProduct = {
  id: string;
  title: string;
  price: string;
  description: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
  username?: string;
  userAvatar?: string | null;
}

export type ProductsList = Prisma.PromiseReturnType<typeof getProductsByPage>