import React, { Fragment } from 'react';
import styled from '@emotion/styled';

const TheadContain = styled.thead`
  background-color: var(--skyblue-dark-1);
  color: var(--White);
`;

const Products = ( props ) => {
  return (
    <Fragment>
      <h2 className="txt-a-c txt-brand-3 txt-strong">{ props.title }</h2>

      <div className="t-interactive vm-5">
        <table class="table ab-odd">
          <TheadContain className="">
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </TheadContain>

          <tr>
            <td>1</td>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
          </tr>

        </table>
      </div>
    </Fragment>
  );
};

export default Products;