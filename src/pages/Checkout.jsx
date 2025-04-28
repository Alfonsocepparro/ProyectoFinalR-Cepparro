import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
        buyer: { nombre, telefono, email },
        items: cart.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        precio: item.precio,
        quantity: item.quantity,
        })),
        total: totalPrice(),
        date: Timestamp.fromDate(new Date()),
    };

    try {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, order);
        setOrderId(docRef.id);
        clearCart();
    } catch (error) {
        console.error("Error al generar la orden:", error);
    }
    };

    if (orderId) {
    return (
        <div className="checkout-success">
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu número de orden es: <strong>{orderId}</strong></p>
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
        </div>
    );
    }

    return (
    <div className="checkout-form">
        <h2>Finalizar Compra</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Teléfono:</label>
            <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <button type="submit">Confirmar Compra</button>
        </form>
    </div>
    );
};

export default Checkout;
