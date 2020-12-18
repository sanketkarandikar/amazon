import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Store/Reducer';
import { useStateValue } from '../../Store/StateProvider';
import { useHistory } from 'react-router-dom';
import './Subtotal.css';
function Subtotal() {

    const [state, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) =>(
                <>
                <p>
                    Subtotal ({state.basket?.length}):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(state.basket)}
            displayType={"text"}
            thousandOperator={true}
            prefix={ 'Rs'}
            />
            <button onClick={(e) => history.push("/payment")}>Proceed to chekout</button>
        </div>
    )
}

export default Subtotal
