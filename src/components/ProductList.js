import React from "react";
import Button from "./UI/Button";
import classes from "./ProductList.module.css";

function ProductList(props) {
  const deleteItemHandler = (productId) => {
    // Remove item from localStorage
    localStorage.removeItem(productId);

    // Update state in the parent component (App)
    props.onDeleteProduct(productId);
  };

  return (
    <ul className={classes.list}>
      {props.data.map((item) => {
        return (
          <li key={item.productId}>
            {item.productId}- {item.sellingPrice} {item.productName}
            <Button
              onClick={() => deleteItemHandler(item.productId)}
              className="del"
            >
              Delete item
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
