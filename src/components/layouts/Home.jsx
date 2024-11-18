import React from 'react';
import Slide from '../main/Slide';
import Services from '../main/Services';
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home - Career Horizon</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div className='space-y-10'>
                {/* slider */}
                <Slide></Slide>

                {/* services */}
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;