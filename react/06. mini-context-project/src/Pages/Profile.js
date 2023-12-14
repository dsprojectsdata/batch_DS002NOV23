import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {

    const { user } = useContext(UserContext);
    
    return (
        <>
            {user && <h1>User Email is : {user.email}</h1> || <h1>Please Login First</h1>}
            
        </>
    )
}

export default Profile