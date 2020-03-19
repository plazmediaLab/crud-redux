import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESSFULLY,
  GET_PRODUCTS_ERROR,
} from '../types/types';
// Axios
import axiosClient from '../../config/axios';
// Sweetalert2
import Swal from 'sweetalert2';

/*=================================================================================
*	 Create our products ACTION
* --------------------------------------------------------------------------------*/
export function createNewProductsAction(product_arg){
  return async ( dispatch ) => {
    dispatch( addProduct() );

    try {

      // API incert
      await axiosClient.post('/products', product_arg);
      // If is all ok, update the state
      dispatch( addProcuctSuccessfolly(product_arg) );

      // SweetAlert2 successfully alert
      Swal.fire(
        'Success',
        'The product was successfully added',
        'success'
      )

    } catch (error) {

      // If there was an error
      console.log(error);
      dispatch( addProcuctError(true) );

      // SweetAlert2 error alert
      Swal.fire({
        icon: 'error',
        title: 'There was an error',
        text: 'Try add a another product...'
      })

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

/*=================================================================================
*	 Get products from database ACTION
* --------------------------------------------------------------------------------*/
export const getProductsAction = () => {
  return async (dispatch) => {
    dispatch( getProducts() );

    try {
      
      const response = await axiosClient.get('/products');

      dispatch( getProductsSuccessfully(response.data) );

    } catch (error) {

      console.log(error);

    }
  }
}

const getProducts = () => ({
  type: GET_PRODUCTS,
  payload: true
});

const getProductsSuccessfully = (response_arg) => ({
  type: GET_PRODUCTS_SUCCESSFULLY,
  payload: response_arg
})

const getProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true
})