import React, { useEffect, useRef, useTransition } from "react";
import ProductCard from "./ProductCard";
import "./MainPage.css";
import logo from "./logo.svg";
import cart from "./cart.png";
import { data } from "./data";
import Header from "./Header";
import "./Header.css";
import { useState } from "react";

export default function MainPage() {
  const [products, setProducts] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [searchCharsLen, setSearchCharsLen] = useState(0);
  function onTextChange(e) {
    const allCaps = e.target.value;
    if (allCaps.length > 0) {
      setSearchText(allCaps.at(0).toUpperCase() + allCaps.slice(1));
    } else {
      setSearchText(allCaps);
    }
    setSearchCharsLen(allCaps.length);
  }

  

  function renderProducts() {
    if (searchText === "" || searchText === null) {
      return (
        <div className="allproducts">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              img={product.img}
              title={product.title}
              price={product.price + "$"}
            ></ProductCard>
          ))}
        </div>
      );
    } else {
      const filteredData = data.filter(
        (item) => item.title.slice(0, searchCharsLen) === searchText
      );
      if (filteredData.length === 0) {
        return <h1>error not found</h1>;
      } else {
        return (
          <div className="allproducts">
            {filteredData.map((product) => (
              <ProductCard
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price + "$"}
              ></ProductCard>
            ))}
          </div>
        );
      }
    }
  }

  useEffect(() => {
    renderProducts();
  }, [products]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  return (
    <div className="container">
      <Header></Header>

      <div className="productheaddiv">
        <h1>OUR PRODUCTS</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          ref={inputRef}
          onChange={onTextChange}
          placeholder="Enter Phone Name"
          style={
            {
              /*
            borderRadius: "8px",
            width: "300px",
            padding: "6px",
            height: "30px",
            border: "1px solid black",*/
            }
          }
        ></input>
        
        {/* <a href={"SearchPage2/" + searchText}>
          <button
            className="searchBtnHover"
            style={
              {
                
              width: "100px",
              height: "40px",
              marginLeft: "20px",
              borderRadius: "8px",
              borderColor: "green",
              cursor: "pointer",
              boxShadow: "3px 3px green",
              }
            }
          >
            SEARCH
          </button>
        </a> */}

      </div>

      {renderProducts()}
    </div>
  );
}
