import React, { Fragment, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// Components
import Product from './Product';
import EmptyList from './EmptyList';
// Redux
import { useDispatch, useSelector } from 'react-redux';

// REDUX actions
import { getProductsAction, deleteProductAction } from '../redux/actions/productsActions';

const TheadContain = styled.thead`
  background-color: var(--skyblue-dark-1);
  color: var(--White);
`;

const Products = ( props ) => {

  // Dispatch
  const dispatch = useDispatch();
  // Access the Store STATE
  const products = useSelector(state_arg => state_arg.products.products);
  const error = useSelector(state_arg => state_arg.products.error);
  const loading = useSelector(state_arg => state_arg.products.loading);

  // Local STATE
  let count = 0

  // useEffect
  useEffect(() => {
    
    // API request
    const loadProducts = () => dispatch( getProductsAction() )

    loadProducts();

  }, []);

  return (
    <Fragment>

      {error ? <p className="msn msn-l-cancel txt-a-c mb-5"><i className="a-refresh"></i> There was an error to load the products, try refresh site</p> : null}
      {loading ? <p className="msn msn-l-blue txt-a-c mb-5"><i className=" a-hourglass_empty i-spin-l"></i>&nbsp; Loading...</p> : null}

      <h2 className="txt-a-c txt-brand-3 txt-strong">{ props.title }</h2>

      <div className="t-interactive vm-5">
        <table className="table ab-even t-hover">
          <TheadContain className="">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>
                <div className="jc-end">
                  Actions
                </div>
              </th>
            </tr>
          </TheadContain>
          <tbody>

            {products.length === 0 ?(

              <tr>
                <td colSpan="4">
                  <Link to={'/products/new'} className="txt-decoration-none">
                    <EmptyList />
                  </Link>
                </td>
              </tr>

            ):(
              products.map(item => {
              
                count++
                
                return(
                  <Product
                    key={item.id} 
                    item={item}
                    count={count}
                  />
                )
              })
            )}

          </tbody>

        </table>
      </div>
    </Fragment>
  );
};

export default Products;