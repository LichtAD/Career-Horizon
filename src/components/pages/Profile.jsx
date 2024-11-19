import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';

const Profile = () => {

    const { user, updateMyProfile } = useContext(AuthContext);

    // ! update profile (not used)
    const handleMyProfile = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(name, photo);

        updateMyProfile({ displayName: name, photoURL: photo })
            .then(() => {
                toast.success('Profile updated successfully!', {
                    position: "top-center",
                    autoClose: 2000,
                });
                form.reset();
                // window.location.reload();
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Profile - Career Horizon</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div className="mt-4 flex flex-col md:flex-row lg:flex-row gap-2 bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-center">
                    <img className="h-72 md:h-72 lg:h-72 rounded-full" src={user.photoURL} alt="" />
                </div>
                <div className="space-y-8 ml-10">
                    <h1 className="text-3xl font-bold">My Profile</h1>
                    <p className="text-xl">Name: {user.displayName}</p>
                    <p className="text-xl">Email: {user.email}</p>
                    <div>
                        <NavLink className="btn btn-neutral" to={'/updateProfile'}>Update Profile</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;