import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './OrderFulfillment.css';

function OrderFulfillment() {

  let orders_to_fulfill = [
    {
      order_id: 1,
      order_date: "2019-01-01",
      order_status: "Pending",
      order_total: "100.00",
      order_items: [
        {
          product_id: 1,
          product_name: "Test Product 1",
          product_quantity: 1,
          product_price: "10.00",
        },
        {
          product_id: 2,
          product_name: "Test Product 2",
          product_quantity: 2,
          product_price: "20.00",
        }
      ]
    },
    {
      order_id: 2,
      order_date: "2019-01-01",
      order_status: "Pending",
      order_total: "100.00",
      order_items: [
        {
          product_id: 1,
          product_name: "Test Product 1",
          product_quantity: 1,
          product_price: "10.00",
        },
      ]
    },
  ];

  let order_ids = [1, 2];

  for (let i = 0; i < orders_to_fulfill.length; i++) {
    order_ids.push(orders_to_fulfill[i]["order_id"]);
  }

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
            <small>{order_ids.length}</small>
          </div>
        </div>
        <Button>Completed Order</Button>
        <Button>Still In-Progress</Button>
    </div>
  );
}

export default OrderFulfillment;