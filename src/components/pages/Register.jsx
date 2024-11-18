import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googlePic from '../../assets/google.svg';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const navigate = useNavigate();

    const { setUser, regNewUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({name, photo, email, password});

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        // const password = "Passw1";
        const isValid = regex.test(password);
        console.log(isValid); // true if valid, false otherwise

        if (!isValid) {
            setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
            return;
        }


        setError('');

        regNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // console.log(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(error => {
                        // console.log(error.message);
                        setError(error.message);
                    })
                form.reset();
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
            })

    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    };

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
                        <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline rounded-full">
                            <img className='w-6 h-6' src={googlePic} alt="" /> Login with Google
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;