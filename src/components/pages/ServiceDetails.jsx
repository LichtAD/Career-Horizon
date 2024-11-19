import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet";

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

    const ratingStars = {
        size: 25,
        value: rating,
        edit: true,
        isHalf: true,
    };

    return (
        <div>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{serviceName}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div className='container mx-auto px-4 py-12 md:pt-20'>
                <div className='flex flex-col md:flex-row gap-8 items-center'>

                    <div className='self-start md:w-1/2'>
                        <figure>
                            <img className='rounded-2xl h-fit'
                                src={image}
                                alt="" />
                        </figure>

                        {/* cmnt */}

                    </div>

                    <div className='space-y-4 self-start lg:mt-10 md:w-1/2'>
                        <h2 className="text-3xl font-bold">{serviceName}</h2>
                        <p className='text-lg'><span className='font-semibold'>Category:</span> {category}</p>
                        <p className='text-lg'><span className='font-semibold'>Duration:</span> {duration}</p>
                        <p className='text-lg'><span className='font-semibold'>Description:</span> {description}</p>
                        <p className='text-lg'><span className='font-semibold'>Pricing:</span> {pricing}</p>
                        <p className='text-lg'><span className='font-semibold'>Counselor Name:</span> {counselor}</p>
                        <div className='flex items-center gap-2'>
                            <p className='text-lg'><span className='font-semibold'>Rating:</span> {rating} </p>
                            <ReactStars {...ratingStars} />
                        </div>

                        {/* comment section start */}
                        <div className='my-4'>
                            <form onSubmit={getComments} className='flex gap-2'>
                                <input name='comment'
                                    type="text"
                                    placeholder="Share your thoughts"
                                    className="input input-bordered input-neutral w-full max-w-xs" />
                                <button type="submit" className="btn btn-outline btn-neutral">Comment</button>
                            </form>
                        </div>

                        <div>
                            <h3 className='text-2xl'>Comments</h3>
                            <ul className='list-disc ml-8'>
                                {
                                    comments.map((comment, index) => <li key={index}>{comment}</li>)
                                }
                            </ul>
                        </div>
                        {/* comment section end */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;

