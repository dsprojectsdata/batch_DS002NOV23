import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthLayout = ({ authentication = true }) => {

    const authStatus = useSelector(state => state.auth.authStatus)
    const navigate =  useNavigate();

    useEffect(() => {
        if(authentication && authentication !== authStatus){
            navigate("/login")
        } else if(!authentication && authentication !== authStatus){
            navigate("/")
        }
    }, [authentication, authStatus])

    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthLayout