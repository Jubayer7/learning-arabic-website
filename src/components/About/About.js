import React, { useState, useEffect } from 'react';
import Services from '../Services/Services';

const About = () => {
    const [servisec, setServices] = useState([])

    useEffect(() => {
        fetch('./education.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h5>We are not alone.{servisec.length}</h5>
        </div>
    );
};

export default About;