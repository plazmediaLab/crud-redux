import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// REDUX actions
import { deleteProductAction, setEditProductAction } from '../redux/actions/productsActions';
// Sweetalert2
import Swal from 'sweetalert2';

const Product = ({ item, count }) => {

  // Destructuring
  const { id, name, price } = item;

  // Dispatch
  const dispatch = useDispatch();
  const history = useHistory();

  // Confirm if want deleted that product
  const confirmDeleteproduct = id_arg => {

    // SweetAlert2 message
    Swal.fire({
      title: 'Are you sure that do you want delete this product?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        // Send to ACTION
        dispatch( deleteProductAction(id_arg) )

      }
    })

  }

  // Function that redirects on a scheduled basis
  const redurectEditProduct = product_arg => {
    dispatch( setEditProductAction(item) );
    history.push(`/products/edit/${product_arg.id}`);
  };


  return (
    <tr>
      <td>{count}</td>
      <td>{name}</td>
      <td>$ {new Intl.NumberFormat().format(price)}</td> 
      <td>
        <div className="jc-end">
          <button 
            type="button"
            className="btn-s btn-l btn-l-acept br-s"
            onClick={() => redurectEditProduct(item)}
          >
            <i className="a-createmode_editedit"></i>
          </button>
          <button 
            type="button"
            className="btn-s btn-l btn-l-cancel br-s ml-1"
            onClick={() => confirmDeleteproduct(id)}
          >
            <i className="a-trash"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;