import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Account() {

    const location = useLocation()
    console.log(location);

    const [name, setName] = useState(location.state.name)
    const [email, setEmail] = useState(location.state.email)
    const [country, setCountry] = useState(location.state.country)
    const [phone, setPhone] = useState(location.state.phone)

    const id = JSON.parse(localStorage.getItem('id'))

    const navigate = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const data = { name, email, country, phone }
        console.log(data)

        await axios.patch(`http://localhost:5001/update/${id}`, data)
            .then(res => {
                console.log(res)
                if (res.data.success === 1) {
                    navigate("/")
                    window.location.reload()
                } else {
                    alert("update Fail")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='p-5 max-w-xl mx-auto my-10'>
            <div className="rounded-xl p-3 shadow-lg bg-gray-200">
                <div className='flex p-8'>
                    <img src={require('../image/left-arrow.png')} alt="" className='cursor-pointer' onClick={() => navigate('/myaccount')} />
                    <h1 className='font-bold text-2xl ps-8'>Profile</h1>
                </div>
                <form className='p-3 rounded-md flex flex-col'>
                    <div className='flex items-center border-b-2 border-black p-2'>
                        <label htmlFor="" className='text-2xl font-semibold'>Name:</label>
                        <input type="text" className='bg-transparent text-2xl font-medium outline-none ps-2' onChange={(e) => setName(e.target.value)} value={name} />
                    </div>
                    <div className='flex items-center border-b-2 border-black p-2'>
                        <label htmlFor="" className='text-2xl font-semibold'>Email:</label>
                        <input type="text" className='bg-transparent text-2xl font-medium outline-none ps-2' onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className='flex items-center border-b-2 border-black p-2'>
                        <label htmlFor="" className='text-2xl font-semibold'>Country:</label>
                        <input type="text" className='bg-transparent text-2xl font-medium outline-none ps-2' onChange={(e) => setCountry(e.target.value)} value={country} />
                    </div>
                    <div className='flex items-center border-b-2 border-black p-2 mb-5'>
                        <label htmlFor="" className='text-2xl font-semibold'>Phone:</label>
                        <input type="text" className='bg-transparent text-2xl font-medium outline-none ps-2' onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
                    <button className='bg-white text-2xl font-semibold py-2 rounded-lg' onClick={handleUpdate}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Account
