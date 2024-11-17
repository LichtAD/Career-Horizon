import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../main/Navbar';
import Footer from '../main/Footer';

const Root = () => {
    return (
        <div>
            <nav className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </nav>

            <main className='min-h-screen max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;