import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const productoRef = doc(db, "products", itemId);

    getDoc(productoRef)
        .then((snapshot) => {
        if (snapshot.exists()) {
            setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
            setProducto(null);
        }
        })
        .catch((error) => console.error("Error al cargar producto:", error))
        .finally(() => setLoading(false));
    }, [itemId]);

    if (loading) return <p>Cargando producto...</p>;
    if (!producto) return <p>Producto no encontrado.</p>;

    return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
