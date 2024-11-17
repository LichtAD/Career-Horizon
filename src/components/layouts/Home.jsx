import React from 'react';
import Slide from '../main/Slide';
import Services from '../main/Services';

const Home = () => {
    return (
        <div className='space-y-10'>
            {/* slider */}
            <Slide></Slide>

            {/* services */}
            <Services></Services>
        </div>
    );
};

export default Home;