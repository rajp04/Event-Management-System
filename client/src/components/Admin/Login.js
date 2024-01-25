import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setemail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const data = { email, password }
        console.log(data)

        await axios.post("http://localhost:5001/adminlogin", data)
            .then(res => {
                console.log(res)
                if (res.data.success === 1) {
                    sessionStorage.setItem('admin', JSON.stringify(res.data.result[0].id));
                    // alert(res.data.message)
                    navigate("/admin")
                } else {
                    alert(res.data.message)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className='flex flex-col justify-center items-center rounded-lg shadow-2xl bg-gray-200  p-10'>
                <h1 className='font-bold text-4xl pb-10'>Admin Login</h1>
                <input type="text" placeholder='Email Address' className='outline-none rounded text-2xl p-2 font-semibold mb-2' onChange={e => setemail(e.target.value)} value={email} />
                <input type="text" placeholder='Password' className='outline-none  rounded text-2xl p-2 font-semibold mb-2' onChange={e => setPassword(e.target.value)} value={password} />
                <button className='py-2 px-5 text-2xl font-semibold border-2 rounded-lg bg-gray-500' onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login
