import React from 'react';
import './Product.css';
import { useStateValue } from '../Store/StateProvider';
function Product({id, title, image, price, rating}) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    &#8377;
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => 
                        <p key={i}>🌞 </p>
                    )}
                </div>
            </div>
            <img src={image}/>
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product
