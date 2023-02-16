import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./data";
import ProductCard from "./ProductCard";
export default function SearchPage() {
  let productName = "unKnown";
   
  console.log(productName)
  let ofa='heelo';
  console.log(ofa)



  //const filteredData = data.filter((item) => item.company === productName);
  //console.log(filteredData);
  let content;

  /*const productElment = filteredData?.map((product) => {
    return (
      <ProductCard
        id={product.id}
        img={product.img}
        title={product.title}
        price={product.price + "$"}
      ></ProductCard>
    );
  });*/

  


  if(productName.productName===""){
    content=<h1>error not found</h1>
  }else{
    //content=productElment;
  }
 


  return(<div>
{content}
</div>
    );
  };


  
  
