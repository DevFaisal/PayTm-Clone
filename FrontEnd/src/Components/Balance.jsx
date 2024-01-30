import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Balance() {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((res) => (
            setBalance(res.data.balance)
        ))
    }, [])


    return (
        <div>
            <p>Balance : <span className='font-bold'>₹{Math.round(balance)}</span> </p>
        </div>
    )
}

export default Balance