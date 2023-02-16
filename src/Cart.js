import React from "react";
import "./Cart.css";
import CartElment from "./CartElment";
import { data } from "./data";
import { useParams } from "react-router-dom";
export default function Cart() {



  let tableId=-1;
  const cartCard = data.map((item) => {
    tableId=tableId+1;
    return (
      <CartElment
      id={tableId}
        title={item.title}
        img={item.img}
        price={item.price}
        quntity={item.count}
      />
    );
  });



  return (
    <div className="cartcontainer">
      <table >
        <tr>
            <td>PRODUCT</td>
            <td>TITLE</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
        </tr>
        {cartCard}
      </table>
    </div>
  );
}
