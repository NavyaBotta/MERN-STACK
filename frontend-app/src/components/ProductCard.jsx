import {userState, useState} from "react";

const ProductCard=(props)=>{
    let[cart,useCart]=useState(0);
    return( 
    <>
    <div id="product-container">
        <img src={props.details.image}
    </div>
    </>
}
export default ProductCard;