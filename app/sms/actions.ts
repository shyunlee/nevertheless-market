'use server';

import { z } from "zod";
import validator from 'validator';
import { redirect } from "next/navigation";
import { getToken, deleteTokenForPhone, createOrSaveUserWithSmsToken, findToken, deleteToken } from "@/service/token";
import { saveSessionId } from "@/lib/session";

const phoneSchema = z.string().trim().refine((phone) => validator.isMobilePhone(phone, "en-US"), "Wrong phone number format");

const tokenSchema = z.coerce.number().min(100000).max(999999).refine(istokenExist, "This token does not exist.");

async function istokenExist(token: number) {
  const tokenFound = await findToken(token.toString())
  return !!tokenFound
}

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
      await deleteTokenForPhone(result.data);
      const tokenCreated = await getToken();
      const saveTokenUser = await createOrSaveUserWithSmsToken(tokenCreated, result.data);
      console.log(saveTokenUser)
      // send token by using twilio
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
    const result = await tokenSchema.safeParseAsync(token)
    if (result.success) {
      const token = result.data.toString();
      const userFound = await findToken(token, {id: true, userId: true})
      if (userFound) {
        await saveSessionId(userFound.userId)
        await deleteToken(userFound.id)
      }
      redirect('/profile')
    } else {
      return {
        token: true,
        errors: result.error.flatten().formErrors
      }
    }
  }
}