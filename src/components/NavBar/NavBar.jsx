import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import newbright from '../../assets/newbright.jpg';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={newbright} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/crompton">Crompton</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/philips">Philips</NavLink>
                       <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/dimmable">Dimmable</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}