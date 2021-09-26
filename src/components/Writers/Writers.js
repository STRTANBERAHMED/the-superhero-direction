import React from 'react';

const Writers = (props) => {

    const { name, country, balance, age, gender, picture } = props.writer

    console.log(props.writer)
    return (
        <div className="col-md-4">
            <div>
                <div className="card mb-4" style={{ "width": "18rem" }}>
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><small>Name: {name}</small></h5>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Gender: {gender}</p>
                        <p className="card-text">Country: {country}</p>
                        <p className="card-text">Salary: {balance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writers;