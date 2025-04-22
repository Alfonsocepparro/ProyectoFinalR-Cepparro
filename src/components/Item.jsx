import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
const Item = ({ producto }) => {
    return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} />
        <div className="info">
            <h3>{producto.titulo}</h3>
            <p>${producto.precio}</p>
            <button className="ver-mas">
                <Link to={`/item/${producto.id}`}>Ver mas</Link>    
            </button>
        </div>
    </div>
    );
};

export default Item;
