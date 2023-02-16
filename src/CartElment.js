import React from "react";
import "./CartElment.css";
import { useState, useEffect } from "react";
import { data } from "./data";
export default function CartElment(props) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(props.price);

  function increase() {setQuantity(quantity + 1);}
  function decrease() {quantity !== 1 ? setQuantity(quantity - 1) : setQuantity(1);}

  useEffect(() => {
    setPrice(quantity*props.price);
  }, [quantity])

  
  return (
    <tr>
      <td>
        <img src={props.img} className="productImg"></img>
      </td>
      <td>
        <h4>{props.title}</h4>
      </td>
      <td>
        <h4>{price + "$"}</h4>
      </td>
      <td>
        <button onClick={decrease}>-</button>
        <button>{quantity}</button>
        <button onClick={increase}>+</button>
      </td>
    </tr>
  );
}
