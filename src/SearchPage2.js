import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./data";
import ProductCard from "./ProductCard";
export const SearchPage2 = () => {
  let content;
  const { productName = "unKnown" } = useParams();
  console.log(productName);

  const filteredData = data.filter((item) => item.company === productName);
  console.log(filteredData);

  const productElment = filteredData?.map((product) => {
    return (
      <ProductCard
        id={product.id}
        img={product.img}
        title={product.title}
        price={product.price + "$"}
      ></ProductCard>
    );
  });

  if (productName === "unKnown" || filteredData.length === 0) {
    content = <h1>error not found</h1>;
  } else {
    content = productElment;
  }

  return (
    <div
      style={{
        
        display: "flex",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems:"center",
        
        
      }}
    >
      {content}
    </div>
  );
};
