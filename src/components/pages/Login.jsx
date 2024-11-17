import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import googlePic from '../../assets/google.svg';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { logInUser } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password })

        setError('');

        logInUser(email, password)
            .then(result => {
                const user = result.user;
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
                <h1 className="text-center text-3xl font-bold my-4">Login Now</h1>
                <form onSubmit={handleLogin} className="card-body">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    {
                        error && <p className='text-red-600'>{error}</p>
                    }

                    <div className="form-control mt-1">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <div className='my-2'>
                        <h1>Don't have an account? <Link to={'/register'} className='text-primary link link-hover'>Register</Link></h1>
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

export default Login;