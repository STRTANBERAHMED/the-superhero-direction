import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBook } from '@fortawesome/free-solid-svg-icons';
import './Writers.css';

const Writers = (props) => {

    // destructuring
    const { name, country, balance, age, gender, picture } = props.writer || {}

    // font awesome
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    const bookIcon = <FontAwesomeIcon icon={faBook} />


    return (
        <div className="col-md-4">
            <div>
                <div className="card writer mb-4" style={{ "width": "18rem" }}>
                    <img src={picture} className="mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><small>Name: {name}</small></h5>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Gender: {gender}</p>
                        <p className="card-text">Country: {country}</p>
                        <p className="card-text">Salary: ${balance}</p>
                        <button className="btn"
                            onClick={() => props.handleAddWriter(props.writer)}
                        >{shoppingCart} Add To Cart</button>
                        <p>
                            {bookIcon}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writers;