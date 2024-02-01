import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({ children, auth }) {
    const navigate = useNavigate()
    console.log(auth)
    if (!auth) {
        return useEffect(() => {
            navigate("/signin")
        }, [])
    }
    else {
        return (
            <div>
                {children}
            </div>
        )
    }
}

export default Protected