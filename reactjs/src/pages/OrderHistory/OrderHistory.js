import React from 'react';
import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import './OrderHistory.css';

function OrderFulfillment() {

  let previous_orders = [
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
          product_name: "Test Product 3",
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
    for (let i = 0; i < previous_orders.length; i++) {
      if (previous_orders[i]["order_id"] == orderChoice) {
        orderItems = previous_orders[i]["order_items"];
      }
    }
  }
  
  let order_ids = ["Pick an order to view..."];
  
  for (let i = 0; i < previous_orders.length; i++) {
    order_ids.push(previous_orders[i]["order_id"]);
  }

  return (
    <div>
      <h1>Order History</h1>
        <Form.Select onChange={(e) => setOrderChoice(e.target.value)}>
          {order_ids.map((orderID) => (
            <option>{orderID}</option>
          ))}
        </Form.Select>
        <Button onClick={pullOrder(orderChoice)}>View Order Details</Button>
        <div className="order-history-list-container">
          <div className="order-history-list-header">
            {orderItems.map((item) => (
                <div className="order-history-list-item">
                    <h4>{item["product_name"]}</h4>
                    <h5>{"Quantity: " + item["product_quantity"]}</h5>
                </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default OrderFulfillment;