import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firestore.js";
import ItemList from "../components/ItemList.jsx";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "products");
    const q = categoryId
        ? query(productsCollection, where("categoria", "==", categoryId))
        : productsCollection;

    getDocs(q)
        .then((snapshot) => {
        const productosFirebase = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        setItems(productosFirebase);
        })
        .catch((error) => console.error("Error al cargar productos:", error))
        .finally(() => setLoading(false));
    }, [categoryId]);

    return (
    <div>
        <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
        {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
    );
};

export default ItemListContainer;
