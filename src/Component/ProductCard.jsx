import { useProducts } from "../Providers/ProductProvider";
import { actionTypes } from "../State/actionTypes";



const ProductCard = ({ product }) => {

    const {dispatch} = useProducts()
   
    console.log(product);
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={product.image}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                  
                    <div className="py-10">{product.model}</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="">Ratings : {product.rating}</div>
                    <div className="">Price : {product.price}</div>
                </div>
                <div>
                <button onClick={()=> dispatch({type:actionTypes.ADD_TO_CART, payload:product})}  className="btn bg-purple-400 text-white font-semibold w-full">Add to cart</button>
                
                </div>
            </div>
        </div>
    );
};

export default ProductCard;