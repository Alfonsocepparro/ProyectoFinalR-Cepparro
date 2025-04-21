import React from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import productos from "./products";
import {useEffect, useState} from "react";
const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const getProductos = new Promise((resolve) =>{
            setTimeout(()=>{
                resolve (productos);
            }, 2500);
        })
        getProductos.then ((data)=>{
            if (categoryId){
                setItems (data.filter((item)=> item.categoria === categoryId));
            }else{
                setItems(data);
            }   
        });
    }, [categoryId]);

    return(
        <div>
            <h2>{categoryId ? `Categoria: ${categoryId}` : "Todos los productos"}</h2>
        </div>
    );
};


export default ItemListContainer;