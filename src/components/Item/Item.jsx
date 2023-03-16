import './Item.css';
import {Link} from 'react-router-dom';
import {arregloProductos} from '../BaseDatos/baseDatos'

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={arregloProductos.ProductImg} alt={arregloProductos.ProductName}/>
            <h4>{arregloProductos.ProductName}</h4>
            <p>$ {arregloProductos.ProductPrice}</p>
            <Link to={`/item/${arregloProductos.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}