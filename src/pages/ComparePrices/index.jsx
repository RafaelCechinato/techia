import React from 'react';
import { Table } from 'react-bootstrap';

const ComparePrices = () => {
  return (
    <div className="container mt-4">
      <h2>Compare Price</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Price</th>
            <th>My Price</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Competitor 1</td>
            <td>R$ 28,00</td>
            <td>R$ 23,00</td>
            <td>Banana</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Competitor 2</td>
            <td>R$ 18,00</td>
            <td>R$ 08,00</td>
            <td>Water</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Competitor 3</td>
            <td>R$ 10,00</td>
            <td>R$ 40,00</td>
            <td>Tea</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ComparePrices;
