import React from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data/products.js";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList.jsx";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);
    const getProductos = new Promise((resolve) => {
        setTimeout(() => {
        resolve(productos);
        }, 1000);
    });

    getProductos.then((data) => {
        const filtered = categoryId
        ? data.filter((item) => item.categoria === categoryId)
        : data;
        setItems(filtered);
        setLoading(false);
    });
    }, [categoryId]);

    return (
    <div>
        <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
        {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
    );
};

export default ItemListContainer;
