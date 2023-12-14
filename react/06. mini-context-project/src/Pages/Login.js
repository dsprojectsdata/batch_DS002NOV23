import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const { setUser } = useContext(UserContext);

    const updateData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = () => {
        // console.log("userData >>", userData);
        setUser(userData);
    }

    return (
        <>
            <input type='text' name='email' placeholder='Email' value={userData.email} onChange={updateData} />
            <br />
            <input type='password' name='password' placeholder='Password' value={userData.password} onChange={updateData} />
            <br />
            <button onClick={submitForm}>Login</button>
        </>
    )
}

export default Login