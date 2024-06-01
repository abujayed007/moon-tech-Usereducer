
import ProductCard from '../Component/ProductCard';
import { useProducts } from '../Providers/ProductProvider';

const TopRated = () => {
    const {state :{products, loading, error},} = useProducts()
    console.log(products);
    let content;
    if(loading){
        content = <p>Loading</p>
    }
    if(error){
        content =<p>Something went wrong..</p>
    }
    if(!loading && !error && products.length ===0){
        content = <p>Nothing to show, products are empty    </p>
    }
    if(!loading && !error && products.length ){
        content =products.filter(product => product.rating>= 4).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
    }

    return (
        <div className='flex flex-wrap gap-10'>
            
                {content}
            
        </div>
    );
}

export default TopRated;