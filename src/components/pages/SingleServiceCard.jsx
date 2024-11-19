import React from 'react';
import { useNavigate } from 'react-router-dom';


const SingleServiceCard = ({ service }) => {

    const navigate = useNavigate();

    const { id, image, serviceName, category, description, pricing, duration, counselor, rating } = service

    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className='h-full'
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body p-4 md:p-6 lg:p-8">
                    <h2 className="font-semibold text-2xl md:text-lg lg:text-xl">{serviceName}</h2>
                    <p className="text-sm md:text-base lg:text-lg">Category: {category}</p>
                    <p className="text-sm md:text-base lg:text-lg">Pricing: {pricing}</p>
                    <p className="text-sm md:text-base lg:text-lg">Counselor Name: {counselor}</p>
                    <div className="card-actions mt-4 md:mt-6 lg:mt-8">
                        <button onClick={() => navigate(`/services/${id}`)} className="btn btn-neutral btn-outline hover:bg-neutral-focus hover:text-white">Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleServiceCard;