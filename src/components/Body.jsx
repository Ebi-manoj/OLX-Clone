import Card from './Card';
import { useProduct } from '../context/ProductContext';

const Body = () => {
  const { products, setProducts } = useProduct();
  return (
    <div className="w-full min-h-screen  p-10 grid grid-cols-4 gap-5">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Body;
