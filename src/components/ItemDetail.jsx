import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "../App.css";

const ItemDetail = ({ producto }) => {
const [agregado, setAgregado] = useState(false);
const { addItem } = useCart();

const handleAdd = (cantidad) => {
    addItem(producto, cantidad);
    setAgregado(true);
    };

return (
    <div className="producto-detalle">
        <img className= "img" src={producto.imagen} alt={producto.titulo} />
        <div className="info">
            <h2 className="titulo">{producto.titulo}</h2>
            <p className="descripcion">{producto.descripcion}</p>
            <h3 className="precio">${producto.precio}</h3>

            {agregado ? (
            <p>Producto agregado al carrito ✅</p>) : (<ItemCount stock={10} inicial={1} onAdd={handleAdd} />
        )}
        </div>
    </div>
    );
};

export default ItemDetail;
