import React, { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import InputField from './../Components/InputField';
import Button from './../Components/Button';
import axios from 'axios';

function Transfer() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");

    const [amount, setAmount] = useState(0)
    const navigate = useNavigate()

    return (
        <div class="flex justify-center h-screen bg-gray-500">
            <div className="h-full flex flex-col justify-center">
                <div
                    class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
                >
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h2 class="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center space-x-4">
                            <div class="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center">
                                <span class="text-2xl text-white">{name[0]}</span>
                            </div>
                            <h3 class="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div class="space-y-4">
                            <div class="space-y-2">
                                <InputField
                                    onChange={(e) => (
                                        setAmount(e.target.value)
                                    )}
                                    label="Amount (in Rs)" placeholder="Enter amount" type="number" />
                            </div>

                            < Button
                                onClick={() => {
                                    axios.post("http://localhost:3000/api/v1/account/transfer", {
                                        to: id,
                                        amount: amount,
                                    }, {
                                        headers: {
                                            Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
                                        },

                                    }).then((res) => {

                                        if (res.status === 200) {
                                            navigate('/success/:' + amount)
                                        }
                                    }).catch((err) => {
                                        alert(err.response.data.message)
                                    })
                                }}

                                label={"Initiate Transfer"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer