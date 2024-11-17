import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCard from '../pages/SingleServiceCard';

const Services = () => {

    const data = useLoaderData();
    // console.log(data);

    return (
        <div>
            <h4 className='text-center text-3xl font-bold my-4'>Our Services</h4>
            <div className='grid grid-cols-3 gap-8'>
                {
                    data.map(service => <SingleServiceCard key={service.id} service={service}></SingleServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;