import { IProduct } from '@/app/_types';
import Image from 'next/image';

export const ProductCard = ({ image }: IProduct) => {
  return (
    <div className='bg-white p-6'>
      <Image src={image} width={300} height={300} alt='Image' />
    </div>
  );
};
