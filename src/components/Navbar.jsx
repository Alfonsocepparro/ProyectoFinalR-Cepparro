import React from "react";
import CartWidget from "./CartWidget";
import '../App.css';
import {NavLink} from "react-router-dom";
const Navbar = () =>{
    return (
        <nav className="navbar">
            <h1 className="logo">
                <NavLink to="/" className="nav-logo">Mi E-commerce</NavLink>
            </h1>
            <ul className="menu">
                <li><NavLink to="/" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Inicio</NavLink></li>
                <li><NavLink to="/category/tecnologia" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Tecnología</NavLink></li>
                <li><NavLink to="/category/indumentaria" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Indumentaria</NavLink></li>
                <li><NavLink to="/category/hogar" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>Hogar</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
