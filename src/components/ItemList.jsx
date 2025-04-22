import React from "react";
import Item from "./Item.jsx";
import '../App.css';

const ItemList = ({ items }) => {
    return (
    <div className="container">
        <div className="productos">
            {items.map((producto) => (
            <Item key={producto.id} producto={producto} />
            ))}
        </div>
    </div>
    );
};

export default ItemList;
