import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './OrderFulfillment.css';

function OrderFulfillment() {

  let order_ids = [1, 2];

  return (
    <div>
      <h1>Order Fulfillment</h1>
        <Form.Select>
          {order_ids.map((orderID) => (
            <option>{orderID}</option>
          ))}
        </Form.Select>
        <Button>Pull Order for Fulfillment</Button>
        <div className="order-fulfillment-list-container">
          <div className="order-fulfillment-list-header">

          </div>
        </div>
        <Button>Completed Order</Button>
        <Button>Still In-Progress</Button>
    </div>
  );
}


export default OrderFulfillment;