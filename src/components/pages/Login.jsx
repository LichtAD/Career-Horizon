import React, { useContext, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import googlePic from '../../assets/google.svg';
import { AuthContext } from '../provider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

const Login = () => {

    const location = useLocation();
    // console.log(location);

    const navigate = useNavigate();

    const { logInUser, setUser, signInWithGoogle, passwordReset } = useContext(AuthContext);

    const [error, setError] = useState('');

    const notify = (error_notify) => toast.error(error_notify, {
        position: "top-center",
        autoClose: 2000
    });

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
                // setUser(user);
                // console.log(user);
                form.reset();
                navigate(location?.state ? location?.state : '/');
            })
            .catch(error => {
                // console.log(error.message);
                setError(error.message);
                notify(error.message);
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
                // console.log(error);
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 2000
                })
            })
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleShowHidePassword = (event) => {
        event.stopPropagation();
        event.preventDefault();

        return setShowPassword(prev => !prev);
    }

    // ! password reset with email sent (not used here, used in updatePassword page)
    
    const emailRef = useRef();

    const handlePasswordReset = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const email_ref = emailRef.current?.value;
        // console.log('forgot password, email is', email_ref);

        if (!email_ref) {
            toast.warning('Please enter your email!', {
                position: "top-center",
                autoClose: 2000
            })
            return;
        }
        else {
            // alert('Password reset email sent will be!');
            passwordReset(email_ref)
                .then(() => {
                    toast.success('Password reset email sent!', {
                        position: "top-center",
                        autoClose: 2000
                    });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage, {
                        position: "top-center",
                        autoClose: 2000
                    });
                });
        }

    }

    const handlePasswordReset2 = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const email_ref = emailRef.current?.value;
        // console.log('forgot password, email is', email_ref);

        if (!email_ref) {
            toast.warning('Please enter your email!', {
                position: "top-center",
                autoClose: 2000
            })
            return;
        }
        else{
            navigate('/updatePassword', { state: { email_ref } });
        }
    }

    return (
        <div>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Login</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div className='flex justify-center items-center h-screen'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-center text-3xl font-bold my-4">Login Now</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />

                            <button onClick={handleShowHidePassword} className='absolute right-3 top-12 btn btn-xs'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </button>

                            <label className="label">
                                <button onClick={handlePasswordReset2} className="label-text-alt link link-hover">Forgot password?</button>
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
                            <button onClick={handleGoogleLogin} className="btn btn-primary btn-outline rounded-full">
                                <img className='w-6 h-6' src={googlePic} alt="" /> Login with Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;