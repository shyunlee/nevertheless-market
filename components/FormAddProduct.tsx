'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import FormInput from './FormInput';
import { useState } from 'react';
import { getUploadUrl, uploadProduct } from '@/app/products/add/action';
import FormButton from './FormButton';

export default function FormAddProduct() {
  const [titleValue, setTitleValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [preview, setPreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadUrl, setUploadUrl] = useState('');

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'title':
        setTitleValue(e.target.value);
        break;
      case 'price':
        setPriceValue(e.target.value);
        break;
      case 'description':
        setDescriptionValue(e.target.value);
      default:
        break;
    }
  };

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const {target:{files}} = e;
    if (!files) {
      return;
    }
      const file = files[0];
      const size = Number((file.size / (1024 * 1024)).toFixed(2));
      if (size > 5) {
        setErrorMessage('Image should be less than 5MB.')
        return;
      }
      if (!file.type.startsWith('image/')) {
        setErrorMessage('Please upload image file only')
        return;
      }
      const url = URL.createObjectURL(file)
      setPreview(url)
      const response = await getUploadUrl();
      const {result, success} = response
      if (success) {
        const {id, uploadUrl} = result
        setUploadUrl(uploadUrl)
      }
      if (errorMessage) {
        setErrorMessage('')
      }
  }

  return (
    <>
      <form action={uploadProduct} className='flex flex-col gap-5'>
        <label
          htmlFor='photo'
          className='aspect-square border-2 border-neutral-300 border-dashed rounded-md flex flex-col justify-center items-center text-neutral-300 cursor-pointer active:*:scale-98 bg-center bg-cover'
          style={{backgroundImage: `url(${preview})`}}
        >
          {!preview ? (
            <>
              <PhotoIcon className='w-20' />
              <div className='text-neutral-400 text-sm'>Add photo here</div>
              <span className='text-sm text-red-400'>{errorMessage}</span>
            </>
          ): null}
        </label>
        <input type='file' id='photo' name='photo' hidden onChange={onImageChange}/>
        <FormInput
          name='title'
          required
          placeholder='Title'
          type='text'
          value={titleValue}
          onChange={inputChange}
        />
        <FormInput
          name='price'
          required
          placeholder='Price'
          type='text'
          value={priceValue}
          onChange={inputChange}
        />
        <FormInput
          name='description'
          required
          placeholder='Description'
          type='text'
          value={descriptionValue}
          onChange={inputChange}
        />
        <FormButton text='Add Product'/>
      </form>
    </>
  );
}
