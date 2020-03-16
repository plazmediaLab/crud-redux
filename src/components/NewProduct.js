import React, { useState } from 'react';



const NewProduct = () => {

  // State
  const [product, setProduct] = useState({
    nameProduct: '',
    namePrice: ''
  });

  // Handle Info
  const handleInfo = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  };


  return (
    <div className="col-row jc-center">

      <div className="col-8">

        <div className="card br-xl">
          <div className="card-head txt-a-c bg-1">
            <h2>Add new product</h2>
          </div>
          <div className="card-body">
            <form
              
            >
              <div className="form-item">
                <label 
                  for="nameProduct"
                >Product name</label>
                <input 
                  type="text"
                  id="nameProduct"
                  name="nameProduct"
                  placeholder="Write the product name"
                  className="input-100 br-s"
                  onChange={handleInfo}
                />
              </div>
              <div className="form-item">
                <label 
                  for="namePrice"
                >Product price</label>
                <input 
                  type="number"
                  id="namePrice"
                  name="namePrice"
                  placeholder="Write the product price"
                  className="input-100 number-clean br-s"
                  onChange={handleInfo}
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