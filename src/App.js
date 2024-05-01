import React, { useState } from "react";
import ProductForm from "./components/ProductFrom";
import ProductList from "./components/ProductList";

function App() {
  const [product, setData] = useState([
    { productId: 1, sellingPrice: 2000, productName: "GamingLaptop" },
    { productId: 2, sellingPrice: 2500, productName: "Smartphone" },
    { productId: 3, sellingPrice: 1500, productName: "Headphones" },
    // Add more products if needed
  ]);

  const addProductHandler = (data) => {
    setData([...product, data]);
    // Update localStorage
    localStorage.setItem(data.productId, JSON.stringify(data));
  };

  const deleteProductHandler = (productId) => {
    // Filter out the deleted product
    const updatedProductList = product.filter(
      (item) => item.productId !== productId
    );
    setData(updatedProductList);
  };

  const totalSellingPrice = product.reduce((total, item) => total + +item.sellingPrice, 0);

  return (
    <>
      <ProductForm onAddProduct={addProductHandler} />
      <ProductList data={product} onDeleteProduct={deleteProductHandler}/>
      {totalSellingPrice > 0 && (
        <p>Total Selling Price: {totalSellingPrice}</p>
      )}
    </>
  );
}

export default App;
