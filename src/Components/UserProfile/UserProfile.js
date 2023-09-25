import React from 'react';
import "./UserProfile.css";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <h2>{user.email}, Welcome to Hotel-Booking.</h2>
        </div>
    );
};

export default UserProfile;