import React, { useEffect, useState } from 'react';
import Writers from '../Writers/Writers';

const Shop = () => {

    const [writers, setWriters] = useState([])

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
                            >
                            </Writers>)
                        }


                    </div>
                </div>
            </div>
            <div className="col-md-3">

            </div>
        </div>
    );
};

export default Shop;