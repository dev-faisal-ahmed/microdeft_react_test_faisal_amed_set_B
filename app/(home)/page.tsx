import { ProductCard } from '@/components/shared/product-card/ProductCard';
import { apiUrl, email } from '../_data';
import { IProduct } from '../_types';

const getAllProducts = async () => {
  const response = await fetch(apiUrl.getProducts(email));
  const responseData = await response.json();
  return responseData?.data as IProduct[];
};

export default async function Home() {
  const products = await getAllProducts();
  console.log(products);

  return (
    <main className='mx-auto max-w-[1200px]'>
      <h1 className='my-6 text-lg font-semibold'>All Products</h1>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
