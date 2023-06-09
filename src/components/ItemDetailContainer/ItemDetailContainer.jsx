import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../BaseDatos/baseDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
export const ItemDetailContainer = ()=>{
    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = arregloProductos.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    console.log(item)

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white", fontSize:"40px"}}>Zona de Compras</p>
            <ItemDetail item={item}/>
        </div>
    )
}