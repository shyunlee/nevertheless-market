'use client';

import { PhotoIcon } from "@heroicons/react/24/solid";
import FormInput from "./FormInput";
import { useState } from "react";

export default function FormAddProduct() {
  const [titleValue, setTitleValue] = useState('');
  const [priceValue, setPriceValue] = useState<number>();
  const [descriptionValue, setDescriptionValue] = useState('');

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    switch (e.target.name) {
      case 'title':
        setTitleValue(e.target.value)
        break;
      case 'price':
        setPriceValue(Number(e.target.value))
        break;
      case 'description':
        setDescriptionValue(e.target.value)
      default:
        break;
    }
  }
  return (
    <>
      <form>
        <label>
          <PhotoIcon className='w-20' />
          <div className='text-neutral-400 text-sm'>Add photo here</div>
        </label>
        <input type="file" id='photo' name='photo' />
        <FormInput name='title' required placeholder='Title' type='text' value={titleValue} onChange={inputChange}/>
        <FormInput name='price' required placeholder='Price' type='number' value={priceValue} onChange={inputChange}/>
        <FormInput name='description' required placeholder='Description' type='text' value={descriptionValue} onChange={inputChange}/>
      </form>
    </>
  )
};