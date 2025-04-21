import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer"; 
import {Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
const App = () => {
    return( 
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 No encontrado</h1>}/>
            </Routes>
        </>
    );
}   

export default App;