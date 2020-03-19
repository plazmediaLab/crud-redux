import React, { Fragment, useEffect } from 'react';
import styled from '@emotion/styled';
// Components
import Product from './Product';
// Redux
import { useDispatch, useSelector } from 'react-redux';

// REDUX actions
import { getProductsAction } from '../redux/actions/productsActions';

const TheadContain = styled.thead`
  background-color: var(--skyblue-dark-1);
  color: var(--White);
`;

const Products = ( props ) => {

  // Dispatch
  const dispatch = useDispatch();
  // Access the Store STATE
  const products = useSelector(state_arg => state_arg.products.products);
  // console.log(products);

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
      <h2 className="txt-a-c txt-brand-3 txt-strong">{ props.title }</h2>

      <div className="t-interactive vm-5">
        <table className="table ab-even t-hover">
          <TheadContain className="">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </TheadContain>
          <tbody>

            {products.length === 0 ?(
              'There are not products'
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