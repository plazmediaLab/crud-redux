import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR
} from '../types/types';
// Axios
import axiosClient from '../../config/axios';

// Create our products
export function createNewProductsAction(product_arg){
  return ( dispatch ) => {
    dispatch( addProduct() );

    try {
      dispatch( addProcuctSuccessfolly(product_arg) );
    } catch (error) {
      dispatch( addProcuctError(true) );
    }

  }
};

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
})

// If the product is saved in the database
const addProcuctSuccessfolly = product_arg => ({
  type: ADD_PRODUCT_SUCCESSFULLY,
  payload: product_arg
})

// If there was an error
const addProcuctError = (state_arg) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state_arg
})