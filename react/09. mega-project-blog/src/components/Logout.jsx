import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../redux/features/AuthSlice'

const Logout = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <p className='text-white m-0' onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</p>
    )
}

export default Logout