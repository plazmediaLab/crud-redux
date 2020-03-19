import React, { useState, useRef } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';// --> useDispatch [Ejecuta las acciones], useSelector [Accede al STATE de redux]

// REDUX actions
import { createNewProductsAction } from '../redux/actions/productsActions';

const NewProduct = ({ history }) => {

  // Dispatch
  const dispatch = useDispatch();
  // Access the Store STATE
  const loading = useSelector(state_arg => state_arg.products.loading);
  const error = useSelector(state_arg => state_arg.products.error);

  // Call to action
  const addProduct = product => dispatch( createNewProductsAction( product ) );

  // LOCAL STATE
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  // useRef
  const inputName = useRef();

  // onSubmit FORM
  const newProductSubmit = e => {
    e.preventDefault();
    
    // Validate form
    if(name.trim() === '' || price <= 0){
      return;
    }

    // If there not was errors
    setName(''); // ------> Reset form
    setPrice(0); // __/
    inputName.current.focus(); // --> Focus to inputName

    // Create new product
    addProduct({
      name,
      price
    });

    // Redirect
    history.push('/');

  }

  return (
    <div className="col-row jc-center">

      <div className="col-8">

        { loading ? null : null }
        { error ? <p className="msn msn-s-cancel br-m mb-2"><i className="a-info-warning"></i>&nbsp; There was an error</p> : null }

        <div className="card br-xl">
          <div className="card-head txt-a-c bg-1">
            <h2>Add new product</h2>
          </div>
          <div className="card-body">
            <form
              onSubmit={newProductSubmit}
            >
              <div className="form-item">
                <label 
                  htmlFor="nameProduct"
                >Product name</label>
                <input 
                  type="text"
                  id="nameProduct"
                  name="nameProduct"
                  placeholder="Write the product name"
                  className="input-100 br-s"
                  ref={inputName}
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-item">
                <label 
                  htmlFor="price"
                >Product price</label>
                <input 
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Write the product price"
                  className="input-100 number-clean br-s"
                  value={price}
                  onChange={e => setPrice(Number( e.target.value ))}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-100 btn-skyblue mt-2 br-s"
              >Add product</button>

            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

export default NewProduct;