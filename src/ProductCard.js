import React from "react";
import "./ProductCard.css";
import { data } from "./data";
import SinglePhone from "./SinglePhone";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function ProductCard(props) {
 

  return (
    <div className="card" id={props.id} >
      <a className="singlePhoneLink" href={"/SinglePhone/" + props.id}>
        <div>
          <img src={props.img} className="phoneImgMain"></img>
        </div>
      </a>
      <div className="titleandprice">
        <p className="cardtitle">{props.title}</p>
        <p className="price">{props.price}</p>
        
      </div>
    </div>
  );
}
