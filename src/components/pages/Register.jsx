import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import googlePic from '../../assets/google.svg';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { setUser, regNewUser } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name, photo, email, password});

        setError('');

        regNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // console.log(user);
                form.reset();
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })

    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-center text-3xl font-bold my-4">Register Now</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>

                    {
                        error && <p className='text-red-600'>{error}</p>
                    }

                    <div>
                        <h1>Already have an account? <Link to={'/login'} className='text-primary link link-hover'>Login</Link></h1>
                    </div>

                    <div className='text-center'>
                        <button className="btn btn-primary btn-outline rounded-full">
                            <img className='w-6 h-6' src={googlePic} alt="" /> Login with Google
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;