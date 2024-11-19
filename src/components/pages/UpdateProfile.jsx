import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

const UpdateProfile = () => {

    const { user, setUser, updateMyProfile } = useContext(AuthContext);

    const navigate = useNavigate();

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
                setUser({ ...user, displayName: name, photoURL: photo });
                form.reset();
                // window.location.reload();
                navigate('/profile');
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Update Profile</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div className='h-screen flex justify-center items-center'>
                <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl">
                    <h1 className="text-3xl font-bold">Update Profile</h1>
                    <form onSubmit={handleMyProfile} className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input type="text" defaultValue={user?.displayName} name='name' placeholder='name' className="border-2 px-4 py-2 rounded-md" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="photo" className="text-sm">Photo URL</label>
                            <input type="text" defaultValue={user?.photoURL} name='photo' placeholder='photo url' className="border-2 px-4 py-2 rounded-md" />
                        </div>
                        <button type="submit" className="btn btn-neutral px-4 py-2 rounded-md">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;