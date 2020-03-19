// TYPES
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESSFULLY,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT_ID,
  DELETE_PRODUCT_SUCCESSFULLY,
  DELETE_PRODUCT_ERROR,
} from '../types/types';

// Cada REDUCER tiene su propio STATE
const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteProduct: null
}

// El REDUCER siempre es una función 
export default function(state = initialState, action){
  /* Todo el REDUCER es un SWITCH */
  switch (action.type) {
    case GET_PRODUCTS:
    case ADD_PRODUCT:
      return{
        ...state,
        loading: action.payload
      }
    case ADD_PRODUCT_SUCCESSFULLY:
      return{
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case GET_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }
    case GET_PRODUCTS_SUCCESSFULLY:
      return{
        ...state,
        loading: false,
        error: null,        
        products: action.payload
      }
    case DELETE_PRODUCT_ID:
      return{
        ...state,
        deleteProduct: action.payload
      }
    case DELETE_PRODUCT_SUCCESSFULLY:
      return{
        ...state,
        products: state.products.filter(product_arg => product_arg.id !== state.deleteProduct),
        deleteProduct: null
      }

  
    default:
      return state;
  }
}