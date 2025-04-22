import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { totalItems } = useCart();
    const cantidad = totalItems();

    return (
    <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "carrito active" : "carrito")}>
          🛒{cantidad > 0 && <span className="cart-count">{cantidad}</span>}
    </NavLink>
    );
};

export default CartWidget;
