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
  SET_EDIT,
  START_EDIT_PRODUCT,
  SET_EDIT_SUCCESSFULLY,
  SET_EDIT_ERROR,
} from '../types/types';
// Axios
import axiosClient from '../../config/axios';
// Sweetalert2
import Swal from 'sweetalert2';

/*=================================================================================
*	 ACTION Create our products
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
*	 ACTION Get products from database
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

/*=================================================================================
*	 ACTION Delete one product by ID
* --------------------------------------------------------------------------------*/
export const deleteProductAction = (id_arg) => {
  return async (dispatch) => {
    dispatch( deleteProductID(id_arg) );
    
    try {
      
      await axiosClient.delete(`/products/${id_arg}`);
      dispatch( deleteProductSeccessfully() )

      // If is deleted the product
      Swal.fire(
        'Deleted!',
        'Your file has been deleted successfully.',
        'success'
      )

    } catch (error) {

      dispatch( deleteProductError() )
      console.log(error);

    }

  }
}

const deleteProductID = (id_arg) => ({
  type: DELETE_PRODUCT_ID,
  payload: id_arg
});

const deleteProductSeccessfully = () => ({
  type: DELETE_PRODUCT_SUCCESSFULLY
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true
});

/*=================================================================================
*	 ACTION Set product fro edit
* --------------------------------------------------------------------------------*/
export const setEditProductAction = (product_arg) => {
  return (dispatch) => {
    dispatch( setProductEdit(product_arg) );
  }
}

const setProductEdit = (product_arg) => ({
  type: SET_EDIT,
  payload: product_arg
})

/*=================================================================================
*	 ACTION Edit regist in the API and State
* --------------------------------------------------------------------------------*/
export const editProductAction = product_arg => {
  return async (dispatch) => {
    dispatch( editProduct(product_arg) );

    try {
      
      await axiosClient.put(`/products/${product_arg.id}`, product_arg);
      
      dispatch( productEditSuccessfully(product_arg) )

    } catch (error) {

      console.log(error);

    }
  }
}

const editProduct = () => ({
  type: START_EDIT_PRODUCT,
});

const productEditSuccessfully = (product_arg) => ({
  type: SET_EDIT_SUCCESSFULLY,
  payload: product_arg
})