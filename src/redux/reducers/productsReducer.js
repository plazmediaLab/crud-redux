// TYPES
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESSFULLY,
  GET_PRODUCTS_ERROR,
} from '../types/types';

// Cada REDUCER tiene su propio STATE
const initialState = {
  products: [],
  error: null,
  loading: false
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

  
    default:
      return state;
  }
}