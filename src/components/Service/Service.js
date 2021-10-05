import React from 'react';

const Service = (props) => {
    console.log(props.service)
    const { name, price, img } = props.service
    return (
        <div className="col">
            <div className="card">
                <img height="150" width="100" src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                </div>
            </div>
        </div>

    );
};

export default Service;