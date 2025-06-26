'use server';

import { getSession } from '@/lib/session';
import { addProduct } from '@/service/product';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const productSchema = z.object({
  photo: z.string({ required_error: 'Photo is required' }),
  title: z.string({ required_error: 'Title is required' }),
  description: z.string({ required_error: 'Description is required' }),
  price: z.coerce.number({ required_error: 'Price is required' }),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadProduct = async (_: any, formData: FormData) => {
  const data = {
    photo: formData.get('photo')! as string,
    title: formData.get('title')! as string,
    price: formData.get('price')! as string,
    description: formData.get('description')! as string,
  };
  const result = productSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const product = await addProduct({...data, price: Number(data.price), userId: session.id});
      redirect(`/products/${product.id}`)
    }
  }
};

export const getUploadUrl = async () => {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

export async function uploadImageToCloudflare(url: string, data: FormData) {
  return await fetch(url, {
    method: 'POSt',
    body: data,
  });
}
