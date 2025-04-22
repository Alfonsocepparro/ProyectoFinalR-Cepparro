import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

const Cart = () => {
const { cart, removeItem, clearCart, totalPrice } = useCart();

    if (cart.length === 0) {
    return (
        <div>
            <h2>Tu carrito está vacío 🛒:(</h2>
            <Link to="/">Volver al catálogo</Link>
        </div>
    );
    }

    return (
    <div className="container">
        <h2>Carrito de compras</h2>
        <ul>
        {cart.map((item) => (
            <li key={item.id} className="prodCarrito">
                <img src={item.imagen} alt={item.titulo} width="100" />
                <h3>{item.titulo}</h3
                ><div className="infoCarrito">    
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.precio * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </div>
            </li>
        ))}
        </ul>

        <h2 className="preciototal">Total a pagar: ${totalPrice()}</h2>
        <button className="agregar-al-carrito" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout"><button className="agregar-al-carrito">Finalizar compra</button></Link>
        <button className="agregar-al-carrito"><Link to='/'>Volver a Sets</Link></button>
    </div>
    );
};

export default Cart;
