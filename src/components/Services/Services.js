import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://jubayer7.github.io/API/educaton.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className="text-center mt-20 text-success">Our Best Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 service-container">

                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}></Service>)
                }
            </div>
        </div>

    );
};

export default Services;