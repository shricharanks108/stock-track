import React from 'react';
import './OrderFulfillment.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ToDoList() {

  orders_to_fulfill = [
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

  return (
    <div>
        
    </div>
  );
}

export default OrderFulfillment;