import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {

    // destructuring
    const { cart } = props || {}

    // font awesome
    const user = <FontAwesomeIcon icon={faUser} />

    // reduce
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.balance

    const total = cart.reduce(totalReducer, 0)

    return (
        <div className="cart">
            <h5>
                {user}
                <small>Writers Added: </small>
                {cart.length}
            </h5>

            <ul>
                {
                    cart.map(writer => <li
                        key={writer._id}
                    >
                        Name: {writer.name}
                    </li>)
                }
            </ul>

            <h2>Salary: ${total}</h2>
        </div>
    );
};

export default Cart;