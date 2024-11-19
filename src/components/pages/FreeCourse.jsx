import React from 'react';
import free_course from '../../assets/freeCourse.jpg';
import { Helmet } from "react-helmet";

const FreeCourse = () => {
    return (
        <div>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Free Course</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div
                className="hero h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${free_course})`,
                }}>

                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Try the 3 days free trial</h1>
                        <p className="mb-5 text-white">
                            Get instant access to our entire course library for free. No credit card required.
                        </p>
                        <button className="btn text-black bg-white" onClick={() => document.getElementById('my_modal_course').showModal()}>Enroll Now</button>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                        <dialog id="my_modal_course" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-black">Congratulations!!!</h3>
                                <p className="py-4 text-black">Explore our course library and get instant access to our entire course library for free.</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeCourse;