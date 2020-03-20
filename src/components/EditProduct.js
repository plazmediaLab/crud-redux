import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// REDUX actions
import { editProductAction } from '../redux/actions/productsActions';
// React router dom
import { useHistory } from 'react-router-dom';

const EditProduct = () => {
  
  // Local STATE
  const [product, setProduct] = useState({
    name: '',
    price: 0
  });

  // Dispatch
  const dispatch = useDispatch();
  // Access the Store STATE
  const editProduct = useSelector(state_arg => state_arg.products.editProduct);

  const history = useHistory()

  // useEffect
  useEffect(() => {

    if(!editProduct){
    
      history.push('/');

    }

    // Set local state
    setProduct(editProduct);

    // eslint-disable-next-line
  }, [editProduct]);

  // Get the info from form
  const getInfoFrom = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  };

  // Destructuring
  const { name, price } = product;

  // onSubmit
  const formSubmit = e => {
    e.preventDefault();
    
    dispatch( editProductAction(product) );

  }

  return (
    <div className="col-row jc-center">

      <div className="col-8">

        <div className="card br-xl">
          <div className="card-head txt-a-c bg-1">
            <h2><i className="a-createmode_editedit af-m"></i> Edit product</h2>
          </div>
          <div className="card-body">
            <form
              onSubmit={formSubmit}
            >
              <div className="form-item">
                <label 
                  htmlFor="newNameProduct"
                >Product name</label>
                <input 
                  type="text"
                  id="newNameProduct"
                  name="name"
                  placeholder="Write the product name"
                  className="input-100 br-s"
                  value={name}
                  onChange={getInfoFrom}
                />
              </div>
              <div className="form-item">
                <label 
                  htmlFor="newPrice"
                >Product price</label>
                <input 
                  type="number"
                  id="newPrice"
                  name="price"
                  placeholder="Write the product price"
                  className="input-100 number-clean br-s"
                  value={price}
                  onChange={getInfoFrom}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-100 btn-skyblue mt-2 br-s"
              >
                Save change
                &nbsp;<i className="a-save"></i>
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

export default EditProduct;