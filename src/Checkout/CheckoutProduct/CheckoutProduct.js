import React from 'react';
import { useStateValue } from '../../Store/StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, image, title, price, rating}) {
    const [state, dispatch] = useStateValue();

    const removeProduct = () => {
        dispatch({
            type: 'REMOVE_ITEM',
            id
        })
    }

    return (
        <div className="checkoutPorduct">
            <span hidden>{id}</span>
            <img className='checkoutProduct__image' src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    {price}
                </p>
                <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_, i) => 
                        <p key={i}>🌞</p>
                    )}
                </div>
                <button onClick={removeProduct}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
