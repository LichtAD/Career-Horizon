import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>my profile</h1>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
            <div>
                <img className='h-96' src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Profile;