import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [country, setCountry] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const signup = async (e) => {
        e.preventDefault()
        const data = { name, email, country, phone, password, image: "" }
        console.log(data)

        await axios.post("http://localhost:5001/signup", data)
            .then(res => {
                console.log(res)
                if (res.data.success === 1) {
                    alert(res.data.message)
                    navigate("/signin")
                } else {
                    alert("register Fail")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className='' style={{
                backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/979/646/504/desert-moon-stars-night-wallpaper-preview.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: 'center'
            }}>
                <div className='flex justify-center items-center flex-col mx-auto sm:p-24 p-10'>
                    <h1 className='text-white text-3xl text-center pb-5'>SIGNUP NOW</h1>
                    <h1 className='  text-white font-bold text-4xl pb-5 text-center'><span className='text-yellow-500'>KEEP</span> IN TOUCH</h1>
                    <div className='flex space-x-8 text-lg'>
                        <h1 className='text-white'>Home</h1>
                        <h1 className='text-white'>|</h1>
                        <h1 className='text-gray-200'>SignUp</h1>
                    </div>
                </div>
            </div>


            <div className='bg-sky-800 xl:p-20 lg:p-15 md:p-10 sm:p-5'>
                <div className='md:flex flex-row xl:w-3/4 lg:w-2/3 md:1/2 mx-auto bg-cyan-500 p-10 rounded-lg items-center justify-center mb-10'>
                    <div className=' flex basis-3/5'>
                        <img src={require('../image/contactpng.png')} alt="" />
                    </div>
                    <div className='items-center flex-wrap flex-col flex basis-2/5 '>
                        <img src={require('../image/padlock.png')} alt="" className='h-8' />
                        <h1 className='text-3xl text-white pb-6'>SignUp</h1>
                        <input type="text" placeholder='Name' className='p-2  w-full  mb-4 rounded-md font-medium text-xl outline-none' onChange={e => setName(e.target.value)} value={name} />
                        <input type="email" placeholder='Email' className='p-2  mb-4 w-full rounded-md font-medium text-xl outline-none' onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="text" placeholder='Country' className='p-2   mb-4 w-full rounded-md font-medium text-xl outline-none' onChange={e => setCountry(e.target.value)} value={country} />
                        <input type="text" placeholder='Phone Number' className='p-2  mb-4 w-full rounded-md font-medium text-xl outline-none' onChange={e => setPhone(e.target.value)} value={phone} />
                        <input type="password" placeholder='Password' className='p-2  mb-4 w-full rounded-md font-medium text-xl outline-none' onChange={e => setPassword(e.target.value)} value={password} />
                        <button className='bg-white py-2 w-full mb-4 rounded-md font-medium text-xl' onClick={signup}>SEND</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
