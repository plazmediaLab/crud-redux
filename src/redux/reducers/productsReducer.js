// TYPES
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR
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
    case ADD_PRODUCT_ERROR:
      return{
        ...state,
        loading: false,
        error: action.payload
      }

  
    default:
      return state;
  }
}