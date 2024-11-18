import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Profile = () => {

    const { user, updateMyProfile } = useContext(AuthContext);

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
        <div className='flex'>
            <div className='w-1/2'>
                <h1>my profile</h1>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <div>
                    <img className='h-96' src={user.photoURL} alt="" />
                </div>
            </div>
            <div className='ml-10 space-y-4 w-1/2'>
                <h1>Update Profile</h1>
                <form onSubmit={handleMyProfile} className='space-y-4 ml-4'>
                    <div>
                        <input type="text" name='name' placeholder='name' className='border-2' />
                    </div>
                    <div>
                        <input type="text" name='photo' placeholder='photo url' className='border-2' />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Profile;