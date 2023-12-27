import React from 'react'

const ErrorTag = ({ error }) => {
    
    // if(!error){
    //     return <></>
    // }

    return (
        <>
            {error && <p style={{ color: "red", marginTop: 4 }}>{error.message}</p>}
        </>
    )
}

export default ErrorTag