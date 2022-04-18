import React from 'react';
import { useState } from "react";
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
        },
        {
          product_id: 3,
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

  var orderItems = [];
  const [orderChoice, setOrderChoice] = useState('');

  const pullOrder = () => {
    for (let i = 0; i < orders_to_fulfill.length; i++) {
      if (orders_to_fulfill[i]["order_id"] == orderChoice) {
        orderItems = orders_to_fulfill[i]["order_items"];
      }
    }
  }
  
  let order_ids = ["Pick an order to fulfill..."];
  
  for (let i = 0; i < orders_to_fulfill.length; i++) {
    order_ids.push(orders_to_fulfill[i]["order_id"]);
  }

  const updateOrderProgress = () => {
    console.log("progress made nice nice");
  }

  const completeOrder = () => {
    console.log("completed order wooooo");
  }

  return (
    <div>
      <h1>Order Fulfillment</h1>
        <Form.Select onChange={(e) => setOrderChoice(e.target.value)}>
          {order_ids.map((orderID) => (
            <option>{orderID}</option>
          ))}
        </Form.Select>
        <Button onClick={pullOrder(orderChoice)}>Pull Order for Fulfillment</Button>
        <div className="order-fulfillment-list-container">
          <div className="order-fulfillment-list-header">
            <small>{orderItems.length}</small>
          </div>
          <div>
            {orderItems.map((item) => (
              <Form.Check type="checkbox" label={item["product_name"]} />
            ))}
          </div>
        </div>
        <Button onClick={completeOrder}>Completed Order</Button>
        <Button onClick={updateOrderProgress}>Still In-Progress</Button>
    </div>
  );
}

export default OrderFulfillment;