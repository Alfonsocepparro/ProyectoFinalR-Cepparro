import React from "react";
import carrito from '../assets/carrito.png';
const CartWidget = () =>{
    return(
        <div>
            <img src={carrito} alt="carrito de compras" height="40px" width="40px"  />
        </div>
    );
};

export default CartWidget;