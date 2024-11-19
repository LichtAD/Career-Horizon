import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slide = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-4'>Get a Peek</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img className='lg:w-2/3 mx-auto rounded-2xl' src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='lg:w-2/3 mx-auto rounded-2xl' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='lg:w-2/3 mx-auto rounded-2xl' src={img3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;