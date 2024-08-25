import { IProduct } from '@/app/_types';
import Image from 'next/image';

export const ProductCard = ({
  image,
  title,
  email,
  payable_price,
  price,
  stock,
}: IProduct) => {
  return (
    <div className='bg-white p-6'>
      <Image src={image} width={300} height={300} alt='Image' />
      <div className='mt-6 flex items-center justify-between'>
        <h1 className='text-base font-semibold'>{title}</h1>
        <p className='text-lg font-bold'>${price}</p>
      </div>
    </div>
  );
};
