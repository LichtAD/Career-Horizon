import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>

        {/* <li><NavLink to={'/profile'}>My Profile</NavLink></li> */}
        
        {
            user && user.email ?
            <li><NavLink to={'/profile'}>My Profile</NavLink></li>
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
                    <NavLink to={'/'} className="btn btn-ghost text-xl">Career Horizon</NavLink>
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
                                {/* <p>{user?.displayName} {user?.email}</p> */}

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt={user?.displayName}
                                                title={user?.displayName}
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>{user?.displayName}</li>
                                    </ul>
                                </div>

                                {/* <img className='w-10 rounded-full' src={user?.photoURL} alt={user?.displayName} title={user?.displayName} /> */}

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