import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item, count }) => {

  return (
    <tr>
      <td>{count}</td>
      <td>{item.name}</td>
      <td>$ {item.price}</td> 
      <td>
        <div className="jc-end">
          <Link to={`/products/edit/${item.id}`} className="btn-s btn-acept br-s">
            <i className="a-createmode_editedit"></i>
          </Link>
          <button 
            type="button"
            className="btn-s btn-cancel br-s ml-1"
          >
            <i className="a-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;