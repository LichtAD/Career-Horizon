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
                <div className="card-body">
                    <h2 className="font-semibold text-2xl md:text-lg lg:text-xl">{serviceName}</h2>
                    <p>Category :{category}</p>
                    <p>Pricing: {pricing}</p>
                    <p>Counselor Name: {counselor}</p>
                    <div className="card-actions">
                        <button onClick={() => navigate(`/services/${id}`)} className="btn btn-neutral">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;