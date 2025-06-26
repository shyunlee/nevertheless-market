'use server';

import { z } from "zod";
import fs from 'fs/promises'

const productSchema = z.object({
  photo: z.string({required_error: "Photo is required"}),
  title: z.string({required_error: "Title is required"}),
  description: z.string({required_error: "Description is required"}),
  price: z.coerce.number({required_error: "Price is required"}),
})

export const uploadProduct = async (formData: FormData) => {
  const data = {
    photo: formData.get('photo'),
    title: formData.get('title'),
    price: formData.get('price'),
    description: formData.get('description')
  }
  const result = productSchema.safeParse(data)
  if (result.success) {
    // if (data.photo instanceof File) {
    //   const photoData = await data.photo.arrayBuffer();
    //   await fs.appendFile(`./public/${data.photo.name}`, Buffer.from(photoData))
    // }
  }
}

export const getUploadUrl = async () => {
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`
    }
  })

  const data = await response.json()
  return data;
}