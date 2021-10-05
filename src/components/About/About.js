import React, { useState, useEffect } from 'react';
import Services from '../Services/Services';

const About = () => {
    const [servisec, setServices] = useState([])

    useEffect(() => {
        fetch('https://jubayer7.github.io/API/educaton.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h5>We are not alone.{servisec.length}</h5>
            <h5>We are not alone.{servisec.price}</h5>
        </div>
    );
};

export default About;