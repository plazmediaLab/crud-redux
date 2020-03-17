import React, { Fragment } from 'react';



const Products = () => {
  return (
    <Fragment>
      <div className="t-interactive">
        <table class="table ab-odd t-hover">
          <thead>
            <th>#</th>
            <th>
              <div className="t-add-values">
                <span>Table head 1</span>
                <span className="tag-c tag-blue">+99</span>
              </div>  
            </th>
            <th>Table head 2</th>
            <th>Table head 3</th>
          </thead>
          <tr>
            <td>1</td>
            <td>Celda 1</td>
            <td>Celda 2</td>
            <td>Celda 3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Celda 7</td>
            <td>Celda 8</td>
            <td>Celda 9</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Celda 10</td>
            <td>Celda 11</td>
            <td>Celda 12</td>
          </tr>
        </table>
      </div>

      <table class="table ab-odd t-hover t-dark mt-5">
        <tr>
          <th>#</th>
          <th>
            <div className="t-add-values">
              <span>Table head 1</span>
              <span className="tag-c tag-blue">+99</span>
            </div>  
          </th>
          <th>Table head 2</th>
          <th>Table head 3</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Celda 1</td>
          <td>Celda 2</td>
          <td>Celda 3</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Celda 4</td>
          <td>Celda 5</td>
          <td>Celda 6</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Celda 7</td>
          <td>Celda 8</td>
          <td>Celda 9</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Celda 10</td>
          <td>Celda 11</td>
          <td>Celda 12</td>
        </tr>
      </table>
    </Fragment>
  );
};

export default Products;