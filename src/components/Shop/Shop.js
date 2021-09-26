import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writers from '../Writers/Writers';

const Shop = () => {

    // destructuring
    const [writers, setWriters] = useState([])

    const [cart, setCart] = useState([])

    // eventhandler
    const handleAddWriter = (writer) => {

        const newCart = [...cart, writer]

        setCart(newCart)

    }


    useEffect(() => {
        fetch("writers.json")
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            writers.map(writer => <Writers
                                key={writer._id}
                                writer={writer}
                                handleAddWriter={handleAddWriter}
                            >
                            </Writers>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    >
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;