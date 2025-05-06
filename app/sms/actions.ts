'use server';

import { z } from "zod";
import validator from 'validator';
import { redirect } from "next/navigation";

const phoneSchema = z.string().trim().refine((phone) => validator.isMobilePhone(phone, "en-US"), "Wrong phone number format");

const tokenSchema = z.coerce.number().min(100000).max(999999);

type SMSStateType = {
  token: boolean;
  errors?: string[];
}

export const verifySms = async (prevState: SMSStateType, formData: FormData) => {
  const phone = formData.get('phone');
  const token = formData.get('token');
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if(result.success) {
      return {
        token: true
      }
    } else {
      return {
        token: false,
        errors: result.error.flatten().formErrors
      }
    } 
  } else {
    const result = tokenSchema.safeParse(token)
    if (result.success) {
      redirect('/')
    } else {
      return {
        token: true,
        errors: result.error.flatten().formErrors
      }
    }
  }
}