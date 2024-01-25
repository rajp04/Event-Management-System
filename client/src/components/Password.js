import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Password() {

    const navigate = useNavigate()
    const [password, setPassword] = useState()
    const [newpassword, setNewPassword] = useState()
    const id = JSON.parse(localStorage.getItem('id'))
    const data = {
        password,
        newpassword
    }

    const handlechange = async () => {
        await axios.patch(`http://localhost:5001/changepassword/${id}`, data)
            .then(res => {
                console.log(res)
                if (res.data.success === 1) {
                    navigate("/")
                    window.location.reload()
                } else {
                    alert("Password are wrong")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='p-5 max-w-xl mx-auto my-10'>
            <div className="rounded-xl p-3 shadow-lg bg-gray-200">
                <div className='flex p-10'>
                    <img src={require('../image/left-arrow.png')} alt="" className='cursor-pointer' onClick={() => navigate('/myaccount')} />
                    <h1 className='font-bold text-2xl ps-8'>Change Password</h1>
                </div>
                <div className='p-3 rounded-md flex flex-col'>
                    <input type="text" placeholder='Current Password' onChange={(e) => setPassword(e.target.value)} value={password} className='py-2 px-4 rounded-2xl outline-none text-xl' />
                </div>
                <div className='p-3 rounded-md flex flex-col'>
                    <input type="text" placeholder='New Password' className='py-2 px-4 rounded-2xl outline-none text-xl' onChange={(e) => setNewPassword(e.target.value)} value={newpassword} />
                </div>
                <div className='flex justify-center flex-col p-3'>
                    <button className='bg-white py-2 text-2xl font-bold rounded-2xl' onClick={handlechange}>Save New Password</button>
                </div>
            </div>
        </div>
    )
}

export default Password
