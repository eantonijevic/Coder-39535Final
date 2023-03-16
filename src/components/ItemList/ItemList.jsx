import { Item } from "../Item/Item"
import './ItemList.css';
/* import {Link} from 'react-router-dom';
 */
export const ItemList = ({items})=>{

    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>Lista de Productos</div>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}