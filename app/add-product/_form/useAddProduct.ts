'use client';

import { apiUrl, email } from '@/app/_data';
import { fetchOption } from '@/app/_helpers/fetchHelper';
import { FormEvent } from 'react';
import { toast } from 'sonner';

export const useAddProduct = () => {
  const onAddProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      title: { value: string };
      stock: { value: string };
      price: { value: string };
      discount: { value: string };
    };
    const title = form.title.value.trim();
    const stock = form.stock.value;
    const price = form.price.value;
    const discount = form.discount.value;

    // now making api request
    const id = toast.loading('Adding Products');
    try {
      const response = await fetch(
        apiUrl.addProduct,
        fetchOption({
          method: 'POST',
          body: { title, stock, price, discount, email },
        }),
      );

      const responseData = await response.json();
      console.log(responseData);

      if (!responseData.status) throw Error('');
      toast.success('Product Added', { id });
      form.reset();
    } catch (error) {
      toast.error('Failed to add product', { id });
      console.log(error);
    }
  };

  return { handlers: { onAddProduct } };
};
