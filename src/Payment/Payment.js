import React, { useState, useEffect } from 'react';
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../Store/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import { useHistory } from 'react-router-dom';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Store/Reducer';

function Payment() {
    const stripe = useStripe();
    const elements = useElements();
    const [{basket, user}, dispatch] = useStateValue();
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [disabled, setDisabled] = useState(null);
    const [err, setErr] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);

    const history = useHistory();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'GET',
                url: `/payments/create?total=${getBasketTotal(basket)* 100}`
            });
            console.log(response);
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payLoad = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setProcessing(false);
            setErr(null);

            history.push('/orders');
        })
    }

    const handleCardChange =(e) => {
        setDisabled(e.empty);
        setErr(e.error ? e.error.message : '');
    }
    return (
        <div className="payment">
            <div className="payment__container">
                {/* Payment address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Killa bhag, Mangalwedha</p>
                        <p>Dist - Solapur</p>
                    </div>
                </div>
                {/* Payment  review*/}
                <div className="payment__section">
                <div className="payment__title">
                    <h3>Review Products</h3>
                </div>
                <div className="payment__items">
                    {basket.map(item => (
                        <CheckoutProduct key={item.id} id={item.id} price={item.price} image={item.image} rating={item.rating} title={item.title}/>
                    ))}
                </div>
                </div>
                {/* Payment */}
                <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Details</h3>
                </div>
                <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleCardChange}/>
                            <div>
                            <CurrencyFormat renderText={(value) =>(
                <>
                <p>
                    Subtotal ({basket?.length}):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandOperator={true}
            prefix={ 'Rs'}
            />
            <button disabled={processing || disabled || succeeded}><span>{processing ? 'Processing' : 'Buy Now'}</span></button>
                            </div>
                        </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
