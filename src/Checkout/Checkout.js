import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../Store/StateProvider';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {

    const [state, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Gateway/July/One_audio_1500x300.jpg"/>
                <h2 className="checkout__title">
                    Your shopping cart
                </h2>
                {state.basket.map((item) => <CheckoutProduct key={item.id} id={item.id} price={item.price} image={item.image} rating={item.rating} title={item.title}/>)}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
