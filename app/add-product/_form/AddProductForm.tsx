'use client';

import { Button } from '@/components/shared/Button';
import { TextInput } from '@/components/shared/TextInput';
import { useAddProduct } from './useAddProduct';

export const AddProductForm = () => {
  const { handlers } = useAddProduct();
  const { onAddProduct } = handlers;

  return (
    <form
      onSubmit={onAddProduct}
      className='w-full max-w-[420px] rounded-md border border-neutral-300 p-6'
    >
      <h1 className='mb-6 text-lg font-semibold'>Input Product Information.</h1>
      <div className='flex flex-col gap-3'>
        <TextInput label='Title' placeholder='Input Title' name='title' />
        <TextInput
          label='Stock'
          placeholder='Input Stock'
          name='stock'
          type='number'
          min={0}
        />
        <TextInput
          label='Price'
          placeholder='Input Price'
          name='price'
          type='number'
          min={0}
        />
        <TextInput
          label='Discount'
          placeholder='Input discount'
          name='discount'
          type='number'
          min={0}
        />
      </div>
      <Button className='mt-6 w-full'>Add Product</Button>
    </form>
  );
};
