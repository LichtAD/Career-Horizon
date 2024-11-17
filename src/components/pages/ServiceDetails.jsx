import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const data = useLoaderData();
    // console.log(data);

    // const param = useParams();
    const { serviceId } = useParams();
    const serviceIdInt = parseInt(serviceId);
    // console.log(serviceIdInt);


    const service = data.find(service => service.id === serviceIdInt);
    // console.log(service);

    const { id, image, serviceName, category, description, pricing, duration, counselor, rating } = service

    const [comments, setComments] = useState([]);

    const getComments = (event) => {
        event.preventDefault();
        const comment = event.target.comment.value;
        setComments([...comments, comment]);
        event.target.reset();
    }

    return (
        <div>
            <h1>service details: {id}</h1>
            <div className="">
                <figure>
                    <img className='h-80'
                        src={image}
                        alt="" />
                </figure>
                <div className="">
                    <h2 className="">{serviceName}</h2>
                    <p>Category :{category}</p>
                    <p>Pricing: {pricing}</p>
                    <p>Counselor Name: {counselor}</p>
                    <div className="">
                        <button className="btn btn-primary">Book Now</button>
                    </div>

                    {/* comment section */}
                    <div className='my-4'>
                        <form onSubmit={getComments} className='flex gap-2'>
                            <input name='comment'
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs" />
                            <button type="submit" className="btn btn-outline btn-accent">Comment</button>
                        </form>
                    </div>

                    <div>
                        <h3>Comments</h3>
                        <ul>
                            {
                                comments.map((comment, index) => <li key={index} className='list-disc ml-8'>{comment}</li>)
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

