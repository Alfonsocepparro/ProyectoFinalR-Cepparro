import React, { useState } from "react";
import "../App.css";

const ItemCount = ({ stock, inicial, onAdd }) => {
const [cantidad, setCantidad] = useState(inicial);

const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
};

const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
};

return (
    <div className="item-count">
        <button onClick={restar}>-</button>
        <span>{cantidad}</span>
        <button onClick={sumar}>+</button>
        <button className="agregar-al-carrito" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
