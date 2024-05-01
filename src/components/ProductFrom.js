import React, {useRef} from 'react'
import classes from './ProductForm.module.css';
import Button from './UI/Button'

function ProductForm(props) {

    const productIdRef = useRef(null);
    const sellingPriceRef = useRef(null);
    const productNameRef = useRef(null);

const formHandler = (e)=>{
    console.log(productIdRef.current.value)
    e.preventDefault()
    if (!productIdRef.current.value || !sellingPriceRef.current.value || !productNameRef.current.value) {
        alert('Please fill in all fields');
        return;
    }
   
    const addProduct = {
       
        productId : productIdRef.current.value,
        sellingPrice: sellingPriceRef.current.value,
        productName: productNameRef.current.value
    }
    localStorage.setItem(`${addProduct.productId}`, `{productName: ${addProduct.productName}, sellingPrice: ${addProduct.sellingPrice}}`)
    props.onAddProduct(addProduct)
}

  return (
    <div className={classes['form-container']}>
        <form  className={classes['product-form']}>
        <div>
            <label htmlFor='product-id'>ProductId:</label>
            <input type='number' id='product-id' ref={productIdRef}/>
        </div>
        <div>
            <label htmlFor='selling-price'>selling Price:</label>
            <input type='number' id='selling-price' ref={sellingPriceRef}/>
        </div>
        <div>
            <label htmlFor='product-name'>Product Name:</label>
            <input type='text' id='product-name' ref={productNameRef}/>
        </div>
        <Button type='submit' onClick={formHandler}>Add Product</Button>
    </form>
    </div>
  )
}

export default ProductForm;