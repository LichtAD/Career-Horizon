import React from 'react';
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="mt-4 rounded-2xl bg-no-repeat bg-center bg-cover bg-black/40 bg-blend-overlay h-96 flex items-center justify-center flex-col" style={{ backgroundImage: `url(${banner})` }}>
                <h1 className="text-6xl text-white font-bold text-center">Career Horizon</h1>
                <p className="text-2xl text-white text-center mt-4">Find Your Dream Job. Explore Opportunities and Build Your Future with Us.</p>
            </div>
        </div>
    );
};

export default Banner;
