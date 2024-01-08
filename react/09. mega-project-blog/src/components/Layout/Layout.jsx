import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Header from './Header'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/features/AuthSlice'

const Layout = () => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const authData = JSON.parse(localStorage.getItem("auth"));
    //     if(authData){
    //         dispatch(login(authData))
    //     }
    // }, []);

    return (
        <>
            <Header />
                <Outlet />
            <Footer />
            <ToastContainer />
        </>
    )
}

export default Layout