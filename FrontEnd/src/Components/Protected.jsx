import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Protected({ children }) {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/me", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => {
            setAuth(res.status === 200 ? true : false)
        })
    }, [])

    if (!auth) {
        navigate('/signin')
        return null
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