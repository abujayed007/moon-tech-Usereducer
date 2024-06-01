import { createContext, useContext, useEffect, useReducer } from "react";
import {  productReducer,initialState } from "../State/Proudctstate";
import { actionTypes } from "../State/actionTypes";

const Product_CONTEXT = createContext()
// eslint-disable-next-line react/prop-types
const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productReducer , initialState)
    // console.log( state);

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START });
        fetch("http://localhost:3000/products")
          .then((res) => res.json())
          .then((data) =>{
            // console.log(data);
            
            dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
            // console.log(payLoad)
          }
            
          )
          .catch(() => {
            dispatch({ type: actionTypes.FETCHING_ERROR });
          });
      }, []);

    const productInfo ={
        state, dispatch
    }
    return (
        <Product_CONTEXT.Provider value={productInfo}>
            {children}
        </Product_CONTEXT.Provider>
    );
};

export const useProducts =() =>{
  const context = useContext(Product_CONTEXT)
  // console.log(context);
  return context
}

export default ProductProvider;