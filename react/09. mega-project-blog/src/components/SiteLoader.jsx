import React from 'react'
import { Spinner } from 'react-bootstrap'

const SiteLoader = ({ children, isLoading = false }) => {
    return (
        <>
            <div style={{ position: "relative" }}>
                {isLoading && <div style={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#cccccc5c", zIndex: 99 }}>
                    <Spinner />
                </div>}
                {children}
            </div>
        </>
    )
}

export default SiteLoader