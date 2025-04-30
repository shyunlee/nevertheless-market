'use server';

export const handleFormSubmit = async (prevState: any, formData: FormData) => {
  return {errors: ['wrong password', 'password is too short']}
}