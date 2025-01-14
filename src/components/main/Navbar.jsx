import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from '../../assets/logo.jpeg';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>

        {/* <li><NavLink to={'/profile'}>My Profile</NavLink></li> */}

        {
            user && user.email ?
                <>
                    <li><NavLink to={'/profile'}>My Profile</NavLink></li>
                    <li><NavLink to={'/course'}>Free Course</NavLink></li>
                </>
                : ''
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={logo} className="w-16 rounded-full" alt="" />
                        <NavLink to={'/'} className="text-xl font-medium">Career Horizon</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user.email ?
                            <div className='flex items-center gap-2'>

                                <button className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                                    <img className='w-10 rounded-full' src={user?.photoURL} alt={user?.displayName} />
                                </button>

                                <button onClick={logOut} className="btn btn-neutral">Logout</button>
                            </div>
                            : <NavLink to={'/login'} className="btn btn-neutral">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;