import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import icon_10 from '../../assets/icon_10.png';
import icon_11 from '../../assets/icon_11.png';
import icon_12 from '../../assets/icon_12.png';
import icon_13 from '../../assets/icon_13.png';

const WhyUs = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold mb-4'>What We Offer</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='shadow-xl p-8 space-y-4 rounded-2xl'>
                    <img src={icon_10} alt="" />
                    <h1 className='text-2xl font-bold'>Exclusive Coach</h1>
                    <p className='text-sm'>Sed ut perspicia unde omnis iste natus error sit voluptatem accusantium doloreue</p>
                    <button className='btn hover:bg-neutral hover:text-white'><FaAngleRight /></button>
                </div>
                <div className='shadow-xl p-8 space-y-4 rounded-2xl'>
                    <img src={icon_11} alt="" />
                    <h1 className='text-2xl font-bold'>Consulting</h1>
                    <p className='text-sm'>Sed ut perspicia unde omnis iste natus error sit voluptatem accusantium doloreue</p>
                    <button className='btn hover:bg-neutral hover:text-white'><FaAngleRight /></button>
                </div>
                <div className='shadow-xl p-8 space-y-4 rounded-2xl'>
                    <img src={icon_12} alt="" />
                    <h1 className='text-2xl font-bold'>Live Trainings</h1>
                    <p className='text-sm'>Sed ut perspicia unde omnis iste natus error sit voluptatem accusantium doloreue</p>
                    <button className='btn hover:bg-neutral hover:text-white'><FaAngleRight /></button>
                </div>
                <div className='shadow-xl p-8 space-y-4 rounded-2xl'>
                    <img src={icon_13} alt="" />
                    <h1 className='text-2xl font-bold'>Marketing Goals</h1>
                    <p className='text-sm'>Sed ut perspicia unde omnis iste natus error sit voluptatem accusantium doloreue</p>
                    <button className='btn hover:bg-neutral hover:text-white'><FaAngleRight /></button>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;