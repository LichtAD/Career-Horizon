import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='font-poppins'>
            <nav className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </nav>

            <main className='min-h-screen w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            
            <footer>
                <Footer></Footer>
            </footer>

            <ToastContainer />
        </div>
    );
};

export default Root;