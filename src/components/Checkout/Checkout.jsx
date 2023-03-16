import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';

export const Checkout = () => {
    const {productCartList} = useContext(CartContext);
    return (

        <div>
            <h1>Hewwo</h1>
        </div>
    )
}
