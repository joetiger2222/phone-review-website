import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useParams, useRouteMatch } from "react-router-dom";
import { data } from "./data";
import "./SinglePhone.css";


export default function SinglePhone(props) {
  let {id}=useParams();
  
  return (
    <div >
    <div className="container">
      <div className="title">
        <h1>{data.at(id).title}</h1>
      </div>
      <div className="information">
        <div>
          <img src={data.at(id).img}></img>
        </div>
        <div className="info">
            <h1>{"Model: "+data.at(id).title}</h1>
            <h4>{"MADE BY : "+ data.at(id).company}</h4>
            <h4>{"Price : "+data.at(id).price+"$"}</h4>
            <label>Some Info About Product:</label>
            <p>{data.at(id).info}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
