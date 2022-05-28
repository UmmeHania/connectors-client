import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>My Profile</h1>
            <hr />

            <h1 className='text-xl text-center mt-2'>Name: {user.displayName}</h1>
            <h1 className='text-xl text-center'>Email: {user.email}</h1>
        </div>
    );
};

export default MyProfile;