import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const obtenerProducto = new Promise((resolve) => {
        setTimeout(() => {
        const prod = productos.find((p) => p.id === itemId);
        resolve(prod);
        }, 1000);
    });

    obtenerProducto.then((res) => {
        setProducto(res);
        setLoading(false);
    });
}, [itemId]);

if (loading) return <p>Cargando producto...</p>;
if (!producto) return <p>Producto no encontrado.</p>;

return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
