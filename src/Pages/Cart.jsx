
import { useProducts } from '../Providers/ProductProvider';
import ProductCard from '../Component/ProductCard';

const Cart = () => {
  const {state :{products, loading, error, cart},} = useProducts()
  console.log(products);
  let content;
  if(loading){
      content = <p>Loading</p>
  }
  if(error){
      content =<p>Something went wrong..</p>
  }
  if(!loading && !error && cart.length === 0){
      content = <p>Nothing to show, cart are empty    </p>
  }
  if(!loading && !error && cart.length ){
      content =cart.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
  }

  return (
      <div className='flex flex-wrap gap-10'>
          
              {content}
          
      </div>
  );
};

export default Cart;