import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

const UpdatePassword = () => {

    const { passwordReset } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();
    // console.log('location', location);

    const email_ref = location.state?.email_ref;
    // console.log('email_ref', email_ref);

    // ! password reset with email sent (used)

    const handlePasswordResetMail = (event) => {
        event.stopPropagation();
        event.preventDefault();

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
                    navigate('/login');
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

    return (
        <div>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Reset Pasword</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div className='h-screen flex justify-center items-center'>
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl">
                    <h1 className="text-3xl font-bold">Reset Password</h1>

                    <form onSubmit={handlePasswordResetMail} className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="update_password" className="text-sm">Is this your email?</label>
                            <input type="text" name="update_password" defaultValue={email_ref} className="border-2 px-4 py-2 rounded-md" />
                        </div>
                        <button onClick={() => window.open('https://mail.google.com/mail/u/0/', '_blank')} className="btn btn-neutral w-full">Reset</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default UpdatePassword;