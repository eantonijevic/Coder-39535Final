import './App.css';
import React from 'react';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { Navbar } from './components/NavBar/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartContainer } from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';
import NewBright from './components/NewBright/NewBright';
import {Checkout} from './components/Checkout/Checkout';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {AddProducts} from './components/AddProducts/AddProducts';
import UserAuthContext from './context/UserAuthContext';

function App() {

  return (<>
   <UserAuthContext>
    <BrowserRouter>
      <CartProvider>
        <div className="App">
            <div>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                  <Route path="/checkout" element={<Checkout/>}/>
                  <Route path="/addproducts" element={<AddProducts/>}/>
                  <Route path="/signup" element = {<Signup/>}/>
                  <Route path="/login" element = {<Login></Login>}/>
             {/*      <Route path='*' element={<ItemListContainer />}/> */}
                  {/*  // cualquier otra ruta me reenderiza este componente */}
                </Routes>
            </div>
        </div>
      </CartProvider>
    </BrowserRouter>

    <NewBright title="New Bright">
    </NewBright>
    </UserAuthContext>
    </>
  );
}

export default App;