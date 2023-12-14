import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NoPageFound = () => {

    // const navigate = useNavigate()

    // <Navigate
    
    // useEffect(() => {
    //     navigate("/");
    // }, [])

    return (
        <>
            {/* {true && <Navigate to="/" />} */}
            <h1>No Page Found</h1>
        </>
    )
}

export default NoPageFound