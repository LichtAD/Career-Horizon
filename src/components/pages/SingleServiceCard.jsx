import React from 'react';

const SingleServiceCard = ({ service }) => {

    const {id, image, serviceName, category, description, pricing, duration, counselor, rating } = service

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <img className='h-full'
                        src={image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>Category :{category}</p>
                    <p>Pricing: {pricing}</p>
                    <p>Counselor Name: {counselor}</p>
                    <div className="card-actions">
                        <button className="btn btn-neutral">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;