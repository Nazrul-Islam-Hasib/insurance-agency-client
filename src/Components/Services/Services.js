import React, { useContext, useEffect, useState } from 'react';
import { serviceContext } from '../../App';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [service, setservice] = useState([]);
    useEffect(() => {
        fetch('https://insurance-agency-server.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])
    const [selectedService, setSelectedService] = useContext(serviceContext);
    const handleService = (item) => {
        setSelectedService(item);
    }
    return (
        <div className="bg-color">
            <div className="container section-pad">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <h2 className="secondary-color">Services</h2>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    {
                        service.map(se => <ServiceItem key={se._id} service={se} handleService={handleService}></ServiceItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;