import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
const Navbar = () =>{
    return (
        <nav className="navbar">
            <div className="leyenda">
                <h2>Mi tienda ecommerce</h2>
            </div>
            <div className="nav-links">
                <NavLink to= '/'>Inicio</NavLink>
                <NavLink to= '/category/camperas'>Camperas</NavLink>
                <NavLink to= '/category/remeras'>Remeras</NavLink>
                <NavLink to= '/category/pantalones'>Pantalones</NavLink>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default Navbar;
