import React, { useState } from 'react';



const EditProduct = () => {
  // State
  const [product, setProduct] = useState({
    newNameProduct: '',
    newPrice: ''
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
            <h2><i className="a-createmode_editedit af-m"></i> Edit product</h2>
          </div>
          <div className="card-body">
            <form
              
            >
              <div className="form-item">
                <label 
                  for="newNameProduct"
                >Product name</label>
                <input 
                  type="text"
                  id="newNameProduct"
                  name="newNameProduct"
                  placeholder="Write the product name"
                  className="input-100 br-s"
                  onChange={handleInfo}
                />
              </div>
              <div className="form-item">
                <label 
                  for="newPrice"
                >Product price</label>
                <input 
                  type="number"
                  id="newPrice"
                  name="newPrice"
                  placeholder="Write the product price"
                  className="input-100 number-clean br-s"
                  onChange={handleInfo}
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