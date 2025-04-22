import React from "react";
import { createContext, useState, useContext } from "react";

// Contexto
export const CartContext = createContext();

// Hook personalizado (opcional)
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

  // Agregar producto al carrito
    const addItem = (item, quantity) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);

    if (itemInCart) {
        const updatedCart = cart.map((prod) =>
        prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
        setCart(updatedCart);
    } else {
        setCart([...cart, { ...item, quantity }]);
    }
};

  // Remover producto por ID
    const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    };

  // Vaciar carrito
    const clearCart = () => setCart([]);

  // Total de unidades en el carrito
const totalItems = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  // Total en $ del carrito
    const totalPrice = () =>
    cart.reduce((acc, item) => acc + item.quantity * item.precio, 0);

  // Verificar si un item ya está
    const isInCart = (id) => cart.some((item) => item.id === id);

    return (
    <CartContext.Provider
        value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
        isInCart
        }}
    >
        {children}
    </CartContext.Provider>
    );
};
